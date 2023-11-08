require('dotenv').config();
const jwt = require('jsonwebtoken');


const logged = async (req,res,next)=>{
    try{
        const bearerToken = req.header("authorization")
        if (!bearerToken) return res.status(401).json({mensaje:"Fallo la authorization"})

        const token = bearerToken.split(' ')[1]
        const user = await dataFromToken(token)

        if (!user.id) return res.status(401).json({mensaje:"Credenciales invalidas"})

        req.user = user
        next();
    }catch(error){
        if (!user) return res.status(500).json({mensaje: "Error inesperado"})
    }
}

const dataFromToken = async(token)=>{
    try{
        return jwt.verify(token,process.env.TOKEN_SECRET,(err,data)=>{
            if(err) return err
            return data
        })
    }catch(error){
        throw error
    }
}
//
module.exports = {logged ,dataFromToken}