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

// const esIdEliminado = async () => {
//     const cliente
// }

module.exports = {
    existeRut,
    existeCorreo,
    esIdEliminado
}