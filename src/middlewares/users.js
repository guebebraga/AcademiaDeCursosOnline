const jwt = require('jsonwebtoken');
require('dotenv').config();

const rolValidation = async (req,res,next)=>{
    try{
        const datos = req.body
        if (datos.rol !=="Administrador" && datos.rol !=="Evaluador"
        && datos.rol !=="Profesor" && datos.rol !=="Alumno"){
            return res.status(401).json({mensaje:"Roles admitidos: Administrador Evaluador Profesor Alumno se debe respetar letras mayusculas"})
        }
        next();
    }catch(error){
        if (!datos) return res.status(500).json({mensaje: "Error inesperado"})
    }
}

const adminValidacion= async(req, res, next)=>{
    try{
        const bearerToken = req.header("authorization")
        const token = bearerToken.split(' ')[1]
        user = jwt.verify(token, process.env.TOKEN_SECRET)
        if(user.rol!=='Administrador'){
            return res.status(401).json({mensaje:"Solo los Administradores pueden hacer eso"})
        }
        next()
    }catch(error){
        if (!user) return res.status(500).json({mensaje: "Error inesperado"})
}
}

const adminSupValidacion= async(req, res, next)=>{
    try{
        const bearerToken = req.header("authorization")
        const token = bearerToken.split(' ')[1]
        user = jwt.verify(token, process.env.TOKEN_SECRET)
        if(user.rol!=='Administrador'&& user.rol!=='Supervisor'){
            return res.status(401).json({mensaje:"Solo los Administradores y Supervisores pueden hacer eso"})
        }
        next()
    }catch(error){
        if (!user) return res.status(500).json({mensaje: "Error inesperado"})
}
}


module.exports = {rolValidation, adminValidacion, adminSupValidacion}



