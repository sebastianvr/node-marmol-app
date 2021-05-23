const { validationResult } = require("express-validator");
const usuario = require("../models/usuario");

const validarCampos = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

// const exiteEmail = (req, res, next)=>{
//     const correo = await usuario.findOne({correo});
//     if(!correo)

//     next();
// }

module.exports = {
    validarCampos,
}