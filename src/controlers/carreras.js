const modeloCarreras = require("../models/carreras.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Error } = require("../config/mongo.js");


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


module.exports={post}
