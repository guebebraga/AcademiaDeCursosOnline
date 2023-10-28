const modeloExam = require("../models/examenes")

const get = async(req, res)=>{
    try{
        let {_id}= req.body
        if(!_id){
            return res.status(401).json({mensaje :"Falta ingresar _id"})
        }
        examen = await modeloExam.get(_id)
        if(!examen){
            return res.status(401).json({mensaje :"No se encontro examen"})
        }
        return res.status(200).json({mensaje: `Examen encontrado`})
    }catch(error){
        return res.status(500).json({mensaje:"Estas en el catch baby"})
    }
}

const post = async(req, res)=>{
    try{
        let datos = await modeloExam.post(req.body)
        console.log(datos)
        return res.status(200).json({datos})

    }catch(error){
        return res.status(500).json({mensaje:"Estas en el catch baby"})
    }
}

module.exports={get, post}