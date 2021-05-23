const { Router } = require("express");
const { check } = require("express-validator");

const { usuarioGet, 
        usuarioPost, 
        usuarioPut, 
        usuarioDelete } = require("../controllers/usuario.controller");

const { validarCampos } = require("../middlewares/valida-campos");


const router = Router();

router.get('/', usuarioGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/:id', usuarioDelete);

module.exports = router;