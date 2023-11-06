const modeloCarreras = require("../models/carreras.js")
const bcrypt = require('bcrypt');
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
        let datos= await modeloCarreras.post(req.body)
        /*if(datos.rol !== 'admin'){
            throw 'Solo los admin pueden ingresar carreras'
        }*/
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
        carrera = await modeloCarreras.get(_id)
        if(!carrera){
            return res.status(401).json({mensaje :"No se encontro carrera"})
        }
        return res.status(200).json({mensaje: `Carrera encontrada`, carrera})
    }catch(error){
        return res.status(500).json({mensaje:"Estas en el catch baby"})
    }
}

const borrar = async(req,res)=>{
    try{
    carrera = await modeloCarreras.borrar(req.body._id)
    if(!carrera){
        return res.status(401).json({mensaje:"No se encontro carrera"})
     }
     return res.status(200).json({mensaje:`Se borro con exito la carrera`})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}



module.exports={post, get, borrar}
