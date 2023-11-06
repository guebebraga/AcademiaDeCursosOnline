
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

    
    module.exports = {rolValidation}



