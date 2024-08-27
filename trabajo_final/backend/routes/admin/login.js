var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', async function(req, res, next) {
    res.render('admin/login', {
        layout: "admin/layout"
    });
});

router.post('/login', async (req, res, next) => {
    try{
        var usuario = req.body.usuario;
        var password = req.body.password;
        
        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.usuario = data.usuario;

            res.redirect('admin/libros');
        }
        else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    }
    catch(error)
    {

    }
});

router.get('/logout', async (req, res, next) => {
    try {
        req.session.id_usuario = undefined;
        req.session.usuario = undefined;

        res.redirect('/');
    }
    catch(error)
    {

    } 
})
module.exports = router;