const { Schema, model } = require('mongoose');


const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    rut: {
        type: String,
        default : ''
    },
    celular:{
        type: String,
        require: [true, 'El celular es obligatorio'],
        unique: false
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    google: {
        type: Boolean,
        default: false
    },
    idDifunto:{
        type: Schema.Types.ObjectId,
        ref: 'Difunto',
        required: false
    }


});



module.exports = model('Cliente', ClienteSchema);