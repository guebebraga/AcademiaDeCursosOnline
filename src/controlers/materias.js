const modeloMaterias = require("../models/materias")
const { Error } = require("../config/mongo.js");

const post = async(req,res)=>{
    try {
        console.log(req.body)
        let datos= await modeloMaterias.post(req.body)
        /*if(datos.rol !== 'admin'){
            throw 'Solo los admin pueden ingresar carreras'
        }*/
        console.log(datos)
        return res.status(200).json({datos})
    }catch(error){
        return res.status(500).json({mensaje:"Entraste en el catch de controlers"})
    }
}

const get = async(req,res)=>{
    try{
     materia = await modeloMaterias.get(req.body._id)
     console.log(materia)
     if(!materia){
        return res.status(401).json({mensaje:"No se encontro materia"})
     }
     return res.status(200).json({mensaje:`Resultados de la busqueda`,materia})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
};

const put = async(req,res)=>{
    try{
    const materiaId = req.params.materiaId
    const data = req.body
    materia = await modeloMaterias.put(data ,materiaId)
    if(!materia){
        return res.status(401).json({mensaje:"No se encontro materia"})
     }

     return res.status(200).json({mensaje:`Se modifico con exito la materia`, materia})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}


const borrar = async(req,res)=>{
    try{
    materia = await modeloMaterias.borrar(req.body._id)
    if(!materia){
        return res.status(401).json({mensaje:"No se encontro materia"})
     }
     return res.status(200).json({mensaje:`Se borro con exito la materia`})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}

const matAlumno = async(req,res)=>{
    try{
     materia = await modeloMaterias.matAlumno(req.body._id)
     console.log(materia)
     if(!materia){
        return res.status(401).json({mensaje:"No se encontro materia"})
     }
     return res.status(200).json({mensaje:`Resultados de la busqueda`,materia})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
};


module.exports={post, get, borrar, put , matAlumno}
