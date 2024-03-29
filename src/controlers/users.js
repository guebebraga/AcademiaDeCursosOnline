const modeloUser = require("../models/users.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Error } = require("../config/mongo.js");


const profile = async (req, res, next)=>{
    try{
        let _id = req.body._id
        if(!_id){
            return res.status(401).json({mensaje:"Faltan ingresar _id"})
        }
        usuario = await modeloUser.profile(_id)
        if(!usuario)
        {
           return res.status(401).json({mensaje:"Algo no esta nada bien"})
        }
        return res.status(200).json({mensaje:`Profile`, usuario})
    }catch(error){
        /*return res.status(500).json({mensaje:"No se puede devolver perfil"})*/
        next(error)
    }
}

const get = async(req,res, next)=>{
    try{
     let {username, password}=req.body
     
     if(!username||!password){
        return res.status(401).json({mensaje:"Faltan ingresar datos"})
     }
     usuario = await modeloUser.get(username, password)
     if(!usuario)
     {
        return res.status(401).json({mensaje:"Algo no esta nada bien"})
     }
     
     const token = jwt.sign(
        { username: usuario.username, id: usuario._id, nombre:usuario.nombre, apellido:usuario.apellido, rol:usuario.rol },
        "miPassParaBack")
        console.log(token)

     return res.status(200).json({mensaje:`Welcome back ${usuario.username} rol ${usuario.rol}`,token})

    }catch(error){
        /*return res.status(500).json({mensaje:"A ocurrido un error"})*/
        next(error) 
    }
}

/*
Administrador
Evaluador
Profesor
Alumno

*/
const post = async(req,res, next)=>{
    try {
        let datos= await modeloUser.post(req.body)
        console.log(datos)
        return res.status(200).json({datos})
    }catch(error){
        /*return res.status(500).json({mensaje:"Entraste en el catch de controlers"})*/
        next(error)
    }
}

const borrar = async(req, res, next)=>{
    try{
    user = await modeloUser.borrar(req.body._id)
    if(!user){
        return res.status(401).json({mensaje:"No se encontro user"})
     }
     return res.status(200).json({mensaje:`Se borro con exito el user`})

    }catch(error){
        console.log(error)
        /*return res.status(500).json({mensaje:"A ocurrido un error"})*/
        next(error)
    }
}

const put = async(req, res, next)=>{
    try{
    const userId = req.params.userId
    const data = req.body
    user = await modeloUser.put(data ,userId)
    if(!user){
        return res.status(401).json({mensaje:"No se encontro user"})
     }

     return res.status(200).json({mensaje:`Se modifico con exito el user`, user})

    }catch(error){
        console.log(error)
        /*return res.status(500).json({mensaje:"A ocurrido un error"})*/
        next(error)
    }
}

const profes = async (req, res) => {
    try {
      profesores = await modeloUser.profes()
      return res.status(200).json({ msj: "Todos los profes", profesores: profesores});  
    } catch (error) {
      return res.status(500).json({msj: "No se puedo retornar profes"})
    }
  };


module.exports={post, get, borrar, put, profile, profes}

