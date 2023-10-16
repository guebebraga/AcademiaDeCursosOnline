const modeloUser = require("../models/index.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Error } = require("../config/mongo.js");

const get = async(req,res)=>{
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
        { username: usuario.username, id: usuario._id, nombre:usuario.nombre, apellido:usuario.apellido },
        "miPassParaBack")
        console.log(token)

     return res.status(200).json({mensaje:`Welcome back ${usuario.username} rol ${usuario.rol}`,token})

    }catch(error){
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
};


const post = async(req,res)=>{
    try {
        let datos= await modeloUser.post(req.body)
        console.log(datos)
        return res.status(200).json({datos})
    }catch(error){
        return res.status(500).json({mensaje:"Entraste en el catch de controlers"})
    }
}



module.exports={post, get}

