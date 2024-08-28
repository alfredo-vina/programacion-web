var express = require("express");
var router = express.Router();
var librosModel = require("./../models/librosModel");
var cloudinary = require('cloudinary').v2;

const nodemailer = require('nodemailer');

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
    console.log(JSON.stringify(req.body));
    const mail = {
        to: 'alfred@montevideo.com.uy',
        subject: 'Contacto',
        html: req.body.nombre + " se contacta y espera respuesta en " + req.body.email +
        "<br/>Mensaje: <br/>" + req.body.mensaje
    }

    /*
    SMTP_HOST=smtp.mailtrap.io 
    SMPT_PORT=2525
    SMTP_USER=ac453b812df9e6
    SMTP_PASS=2901efe3f2
    */

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io", //process.env.SMTP_HOST,
        port: "587", //process.env.SMTP_PORT,
        auth:{
            user: "8411743e2c822f", //process.env.SMTP_USER, 2037054
            pass: "d092c2661d95e5", //process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error:false, 
        message: "Mensaje enviado"
    });
})

module.exports = router;