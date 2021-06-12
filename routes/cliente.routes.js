const { Router } = require('express');
const { check } = require('express-validator');


const {
    postCliente,
    getCliente,
    getClientes,
    putCliente,
    deleteCliente
} = require('../controllers/cliente.controller');

const { 
    existeRut, 
    existeCorreo,
    existeEstado,
    esIdEliminado
} = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/valida-campos');

const router = Router();

//Crear cliente
router.post('/', [
    //comprobar campos obligatorios
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
    
    check('correo', 'El correo es inválido, intente nuevamente').isEmail(),
    check('contraseña', 'La contraseña es muy corta').isLength({ min: 6 }),
    validarCampos,
    
    //Exite Email - Existe rut
    check('rut').custom(existeRut),
    check('correo').custom(existeCorreo),
    validarCampos
], postCliente);

//Buscar todos los clientes
router.get('/:id', [
    check('id', 'El id no es un id de mongo').isMongoId(),
    validarCampos,
    check('id').custom(esIdEliminado),
    validarCampos
], getCliente);

//Buscar cliente por id
router.get('/', [], getClientes);

//Actualizar cliente por id
router.put('/:id', [], putCliente);

//Eliminar cliente por id
router.delete('/:id', [], deleteCliente);




module.exports = router;