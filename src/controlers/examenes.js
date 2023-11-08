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
        return res.status(200).json({mensaje: `Examen encontrado`, examen})
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

const put = async(req,res)=>{
    try{
    const examenId = req.params.examenId
    const data = req.body
    examen = await modeloExam.put(data ,examenId)
    if(!examen){
        return res.status(401).json({mensaje:"No se encontro examen"})
     }

     return res.status(200).json({mensaje:`Se modifico con exito el examen`, examen})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}

const borrar = async(req,res)=>{
    try{
    examen = await modeloExam.borrar(req.body._id)
    if(!examen){
        return res.status(401).json({mensaje:"No se encontro examen"})
     }
     return res.status(200).json({mensaje:`Se borro con exito el examen`})

    }catch(error){
        console.log(error)
        return res.status(500).json({mensaje:"A ocurrido un error"})
    }
}

module.exports={get, post, borrar, put}