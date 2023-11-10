const modeloCursos = require("../models/cursos.js")
const jwt = require('jsonwebtoken');
const { Error } = require("../config/mongo.js");
/*
Administrador
Evaluador
Profesor
Alumno

*/

const post = async(req,res)=>{
    try {
        let datos= await modeloCursos.post(req.body)
        if(!datos){
            return res.status(401).json({mensaje :"Falta ingresar datos"})            
        }
        console.log(req.body)
        console.log(datos)
        return res.status(200).json({datos})
    }catch(error){
        return res.status(500).json({mensaje:"Entraste en el catch de controlers"})
    }
}

const get = async(req, res)=>{
    try{
        let {_id}= req.body
        if(!_id){
            return res.status(401).json({mensaje :"Falta ingresar _id"})
        }
        curso = await modeloCursos.get(_id)
        if(!curso){
            return res.status(401).json({mensaje :"No se encontro curso"})
        }
        return res.status(200).json({mensaje: `Curso encontrado`, curso})
    }catch(error){
        return res.status(500).json({mensaje:"Estas en el catch baby de controlers"})
    }
}
const put = async(req,res)=>{
    try{
    const cursoId = req.params.cursoId
    const data = req.body
    curso = await modeloCursos.put(data ,cursoId)
    if(!curso){
        return res.status(401).json({mensaje:"No se encontro curso"})
     }
     return res.status(200).json({mensaje:`Se modifico con exito el curso`, curso})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}

const borrar = async(req,res)=>{
    try{
    curso = await modeloCursos.borrar(req.body._id)
    if(!curso){
        return res.status(401).json({mensaje:"No se encontro curso"})
     }
     return res.status(200).json({mensaje:`Se borro con exito el curso`})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}



module.exports={post, get, borrar, put}
