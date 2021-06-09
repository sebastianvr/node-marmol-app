const { Schema, model } = require('mongoose');


const ProductoShema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    fechaIngreso: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    },
    precioDeCompra: {
        type: Number
    },
    imagen: {
        type: String
    }

});



module.exports = model('Producto', ProductoShema);