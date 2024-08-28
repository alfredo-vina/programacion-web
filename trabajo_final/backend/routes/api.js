var express = require("express");
var router = express.Router();
var librosModel = require("./../models/librosModel");
var cloudinary = require('cloudinary').v2;

router.get('/libros', async function (req, res, next) {
    let libros = await librosModel.getLibros();

    libros = libros.map(libro => {
        if (libro.imagen) {
            const imagen = cloudinary.url(libro.imagen, {
                width:100,
                height:120,
                crop:'fill'
            });
            return { libro, imagen};
        }
        else {
            return { libro, imagen:''};
        }
    });

    res.json(libros);
})

module.exports = router;