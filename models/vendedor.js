const { Schema, model } = require('mongoose');


const VendedorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    rut: {
        type: String,
        required: false,
        unique: true
    },
    celular:{
        type: String,
        unique: true
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
    idTrato:{
        type: Schema.Types.ObjectId,
        ref: 'Trato',
        required: true
    }


});



module.exports = model('Vendedor', VendedorSchema);