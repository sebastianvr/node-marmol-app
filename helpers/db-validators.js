const { Cliente } = require("../models")


const existeRut = async (rut = '') => {

    // if (!rut) {
    //     return
    // }

    const cliente = await Cliente.findOne({ rut });
    console.log(cliente.rut);
    if (cliente.rut === '') {
        return
    }
    if (cliente != '') {
        throw new Error('Este rut ya existe en BD');
    }
}

const existeCorreo = async (correo) => {
    console.log(correo);
    const cliente = await Cliente.findOne({ correo });

    if (cliente.correo) {
        throw new Error('Este correo ya existe en BD');
    }
    return
}

const existeEstado = async () => {
    const cliente = await Cliente.findOne({ estado: false });

    if (cliente) {
        throw new Error('Este usuario esta eliminado en BD');
    }
}

module.exports = {
    existeRut,
    existeCorreo,
    existeEstado
}