const { Router } = require("express");

//express-validator es una gran coleccion de middlewares que permite validar campos enviados desde un endpoint
//seran enviados como segundo parametro de router, y se ejecutaran antes que al controlador
//El check va preparando los errores a medida que aparecen y los junta en una coleccion 
const { check } = require("express-validator");

const { usuarioGet, 
        usuarioPost, 
        usuarioPut, 
        usuarioDelete } = require("../controllers/usuario.controller");

const { validarCampos } = require("../middlewares/valida-campos");


const router = Router();

router.get('/', usuarioGet);

router.post('/',[
        check('correo', 'El correo no es valido').isEmail(),
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('password','La contraseña debe tener minimo 6 letras').isLength({min:6}),
        check('rol', 'Rol invalido').isIn(['ROL_EMPLEADO','ROL_CLIENTE']),
        validarCampos,
], usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/:id', usuarioDelete);

module.exports = router;