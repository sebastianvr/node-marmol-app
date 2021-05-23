const { request, response } = require('express');
const bcrypt = require('bcrypt');

const usuarioGet = async (req = request, res = response) => {

    res.json({
        "hola mundo": 333
    });
}

const usuarioPost = async (req = request, res = response) => {

    const { nombre, correo, telefono, estado } = req.body;

    res.json({
        nombre,
        correo,
        telefono,
        estado
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