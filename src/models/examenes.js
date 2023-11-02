const mongoose = require('../config/mongo')

const examenesSchema = new mongoose.Schema({
    preguntas: String,
    respuestas: String,
    duracion: String,
    calificacion: String, 
    materia:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'materias'
}
},{timestamps: true})

const Examen = mongoose.model('examenes', examenesSchema);

async function post(data){
    try{
        const newExam= new Examen(data)
        newExam.save()
        return newExam

    }catch(error){
        throw (`Impostible insertar examen ${error}`)
    }
}

async function get(_id){
    try{
        let examen= await Examen.findOne({_id:_id}).populate('materia')
        return examen;

    }catch(error){
        throw (`No se pudo retornar examen ${error}`)
    }
}

module.exports ={post, get}