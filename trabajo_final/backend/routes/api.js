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

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'alfred@montevideo.com.uy',
        subject: 'Contacto',
        html: req.body.nombre + " se contacta y espera respuesta en " + req.body.email +
        "<br/>Mensaje: <br/>" + req.body.mensaje
    }
})

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

await transport.sendMail(mail);

res.status(201).json({
    error:false, 
    message: "Mensaje enviado"
});

module.exports = router;