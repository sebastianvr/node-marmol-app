const {Schema, model} = require('mongoose');

const usuarioShema =  Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio' ]
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio' ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La clave es obligatorio' ],
    },
    imagen: {
        type: String

    },
    telefono:{
        type: String,
    },
    google: {
        type: Boolean,
        default: false
    },
    estado: {
        type: Boolean,
        default: true
    },
    rol: { 
        type: String,
        required: true,
        enum: ['ROL_EMPLEADO','ROL_CLIENTE']
    }

});
//model('nombre de coleccion en singular', varModelo)
//mongo al construir mi modelo agregará una s al final del nombre de la coleccion
module.exports = model('Usuario', usuarioShema);