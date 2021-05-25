const {Schema, model} = require('mongoose');

const UsuarioShema =  Schema({
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

//sobreescribo un metodo para convertir y mostrar lo que deseo cuando lo llamo en controller
UsuarioShema.methods.toJSON= function (){
    //quito la contraseña y _v, envio el resto
    const {__v, password, ...usuario} = this.toObject();
    return usuario
}


//model('nombre de coleccion en singular', varModelo)
//mongo al construir mi modelo agregará una s al final del nombre de la coleccion
module.exports = model('Usuario', UsuarioShema);