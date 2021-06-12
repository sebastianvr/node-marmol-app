const { response } = require("express");
const bcryptjs = require('bcryptjs');
const { Cliente } = require('../models');

const postCliente = async (req, res = response) => {
    const { nombre, contraseña, celular, correo, idDifunto, ...resto } = req.body;


    try {

        const cliente = new Cliente({ nombre, contraseña, celular, correo, ...resto });

        //Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        cliente.contraseña = bcryptjs.hashSync(contraseña, salt);

        await cliente.save();

        const data = {
            nombre,
            correo,
            celular,
            idDifunto

        }
        //Guardar en BD
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getCliente = async (req, res = response) => {
    const { id } = req.params;

    try {
        const cliente = await Cliente.findById(id);
        const { nombre, rut, correo } = cliente

        const data = {
            nombre,
            rut,
            correo
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const getClientes = async (req, res = response) => {
    const { inicio = 0, limite = 5 } = req.query;
    const estado = { estado: true };

    const [total, clientes] = await Promise.all([
        Cliente.countDocuments(estado),
        Cliente.find(estado)
            .populate('usuario', 'nombre')
            .limit(Number(limite))
            .skip(Number(inicio)),
    ]);

    return res.status(200).json({
        total,
        clientes
    });
}

const putCliente = (req, res = response) => {
    const { id } = req.params;
    const { nombre, contraseña, celular, correo } = req.body;

    res.json({
        nombre, contraseña, celular, correo,
        msg: 'Desde putCliente'
    });
}

const deleteCliente = (req, res = response) => {
    res.json({
        msg: 'Desde deleteCliente'
    });
}


module.exports = {
    postCliente,
    getCliente,
    getClientes,
    putCliente,
    deleteCliente
}