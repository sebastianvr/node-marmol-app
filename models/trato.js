const { Schema, model } = require('mongoose');


const TratoSchema = Schema({
    estado: {
        type: Boolean,
        default: true
    },
    idVendedor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendedor',
        required: true
    },
    idCliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    fechaInicio: {
        type: String,
        required: [true, 'Fecha de inicio del trato es obligatoria']
    },
    fechaEstimadaFinal: {
        type: String,
        required: [true, 'Fecha estimada de finalizacion es obligatoria']
    }


});



module.exports = model('Trato', TratoSchema);