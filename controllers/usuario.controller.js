const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

//un estandar es poner el medelo en mayusculas debido a que las instancias por convencion lleva mayuscula
const Usuario = require('../models/usuario');

const usuarioGet = async (req = request, res = response) => {
res.json({
    "hola mundo": 333
    });
}

const usuarioPost = async (req = request, res = response) => {

    const { nombre, correo, password, telefono, 
            estado = true, imagen='', rol , google } = req.body;
            
    const usuario = new Usuario({nombre, correo, password, telefono, estado, imagen, rol, google});
   
    //encriptacion de password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(usuario.password, salt);

    await usuario.save();

    res.json({
        nombre,
        correo,
        password,
        telefono,
        imagen,
        rol
    });
}

const usuarioPut = async (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        "respuesta": true,
        id
    });
}

const usuarioDelete = async (req = request, res = response) => {

    res.json({
        "hola mundo": 333
    });
}




module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}