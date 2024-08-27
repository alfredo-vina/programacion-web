var express = require('express');
var router = express.Router();
var librosModel = require('./../../models/librosModel');

router.get('/', async function(req, res, next) {
    var libros = await librosModel.getLibros();
    res.render('admin/libros', {
        layout: "admin/layout", 
        libros
    });
});

router.post('/agregar', async function(req, res, next) {
    const titulo = req.body.titulo;
    const subtitulo = req.body.subtitulo;
    const precio = req.body.precio;

    var libros = await librosModel.insertLibro({
        'titulo':titulo,
        'subtitulo':subtitulo,
        'precio':precio
    });

    res.redirect('/');
});

router.post('/modificar', async function(req, res, next) {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const subtitulo = req.body.subtitulo;
    const precio = req.body.precio;

    var libros = await librosModel.updateLibro({
        'id':id,
        'titulo':titulo,
        'subtitulo':subtitulo,
        'precio':precio
    });

    res.redirect('/');
});

router.post('/eliminar', async function(req, res, next) {
    var libros = await librosModel.deleteLibroById(req.body.id);

    res.redirect('/');
});

module.exports = router;