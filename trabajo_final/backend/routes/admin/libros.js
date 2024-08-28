var express = require('express');
var router = express.Router();
var librosModel = require('./../../models/librosModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;

// cloudinary://391349882459546:bIfr1dZ-h-ISOl6LabcJklxnwvk@darz4nvoj

cloudinary.config({
    cloud_name:'darz4nvoj',
    api_key:'391349882459546',
    api_secret:'bIfr1dZ-h-ISOl6LabcJklxnwvk'
});

const uploader = util.promisify(cloudinary.uploader.upload);


router.get('/', async function(req, res, next) {
    var libros = await librosModel.getLibros();

    libros = libros.map(libro => {
        if (libro.imagen){
            const imagen = cloudinary.image(libro.imagen, {
                width:100,
                height:120,
                crop:'fill'
            });
            libro.imagen = imagen;
            //return {libro, imagen};
            return libro;
        }
        else {
            return libro;
        }
    });

    var usuario = req.session.usuario;
    res.render('admin/libros', {
        layout: "admin/layout", 
        libros,
        usuario
    });
});

router.post('/agregar', async function(req, res, next) {
    
    try {
        var imageId = '';
        if (req.files && Object.keys(req.files).length > 0){
            var imagen = req.files.imagen;
            imageId = (await uploader(imagen.tempFilePath)).public_id;
        }

        const titulo = req.body.titulo;
        const subtitulo = req.body.subtitulo;
        const precio = req.body.precio;
        
        var libros = await librosModel.insertLibro({
            'titulo':titulo,
            'subtitulo':subtitulo,
            'precio':precio,
            'imagen':imageId
        });
        
        res.redirect('/admin/libros');
    }
    catch(error) {
        console.log(error);
    }
});

router.post('/modificar', async function(req, res, next) {
    try {
        var imageId = '';
        if (req.files && Object.keys(req.files).length > 0){
            var imagen = req.files.imagen;
            imageId = (await uploader(imagen.tempFilePath)).public_id;
        }
        const id = req.body.id;
        const titulo = req.body.titulo;
        const subtitulo = req.body.subtitulo;
        const precio = req.body.precio;

        var libros = await librosModel.updateLibro({
            'id':id,
            'titulo':titulo,
            'subtitulo':subtitulo,
            'precio':precio,
            'imagen':imageId
        });

        res.redirect('/admin/libros');
    }
    catch(error) {
        console.log(error);
    }
});

router.post('/eliminar', async function(req, res, next) {
    var libros = await librosModel.deleteLibroById(req.body.id);

    res.redirect('/admin/libros');
});

module.exports = router;