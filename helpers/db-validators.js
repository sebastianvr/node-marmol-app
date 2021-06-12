const { Cliente } = require("../models")


const existeRut = async (rut = '') => {

    if (!rut) {
        return;
    }

    const cliente = await Cliente.findOne({ rut });
    if (!cliente) {
        return;
    }
    if (cliente.rut) {
        throw new Error('Este rut ya existe en BD');
    }

}

const existeCorreo = async (correo) => {

    const cliente = await Cliente.findOne({ correo });

    if (!cliente) {
        return;
    }

    if (cliente.correo) {
        throw new Error('Este correo ya existe en BD');
    }
}

const esIdEliminado = async (id = '') => {

    const cliente = await Cliente.findById(id).where({ estado: false });
    if (cliente) {
        throw new Error(`El id  ${id}  esta eliminado en la BD`);

    }
}

const tieneInicio = async (inicio) => {
    //no viene en params
    if (inicio === undefined) {
        return
    }

    if (inicio === '') {
        throw new Error('El params inicio esta vacio');
    }

    //inicio no es un numero
    if (isNaN(inicio)) {
        throw new Error('El params inicio no es correcto');
    }

}

const tieneLimite = async (limite) => {

    //no viene en params
    if (limite === undefined) {
        return
    }

    if (limite === '') {
        throw new Error('El params limite esta vacio');
    }

    //limite no es un numero
    if (isNaN(limite)) {
        throw new Error('El params limite no es correcto');
    }
}

const existeCliente = async (id) => {
    const cliente = await Cliente.findById(id);

    if (!cliente) {
        throw new Error('No existe cliente con este id');
    }


}

const esClienteEliminado = async (id) => {
    const cliente = await Cliente.findById(id).where({ estado: false });
    if (cliente) {
        throw new Error(`El cliente esta eliminado de la BD`);
    }
}

module.exports = {
    existeRut,
    existeCorreo,
    esIdEliminado,
    tieneInicio,
    tieneLimite,
    existeCliente,
    esClienteEliminado
}