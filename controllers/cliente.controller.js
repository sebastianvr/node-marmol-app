const { response } = require("express");
const bcryptjs = require('bcryptjs');
const { Cliente } = require('../models');

const postCliente = async (req, res = response) => {
    const { nombre, contraseña, celular, correo, ...resto } = req.body;
    
    try {

        const cliente = new Cliente({ nombre, contraseña, celular, correo, ...resto });
        //console.log(cliente)

        //Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        cliente.contraseña = bcryptjs.hashSync(contraseña, salt);

        await cliente.save();
        //Guardar en BD
        res.json({
            cliente,
            msg: 'Desde postCliente'
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            error
        })
    }
}

const getCliente = (req, res = response) => {
    res.json({
        msg: 'Desde getCliente'
    })
}

const getClientes = (req, res = response) => {
    res.json({
        msg: 'Desde getClientes'
    })
}

const putCliente = (req, res = response) => {
    res.json({
        msg: 'Desde putCliente'
    })
}

const deleteCliente = (req, res = response) => {
    res.json({
        msg: 'Desde deleteCliente'
    })
}


module.exports = {
    postCliente,
    getCliente,
    getClientes,
    putCliente,
    deleteCliente
}