const { Schema, model } = require('mongoose');


const DifuntoSchema = Schema({
    nombreCompleto: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    fechaNacimiento: {
        type: String,
    },
    fechaDefuncion:{
        type: String,
    },
    epitafio:{
        type: String,
        required: [true, 'El epitafio es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },

});



module.exports = model('Difunto', DifuntoSchema);