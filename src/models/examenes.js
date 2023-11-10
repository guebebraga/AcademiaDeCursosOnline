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

async function put(datos, id){
    try{
      const examen = await Examen.findByIdAndUpdate(id, datos, { new: true });
      return examen
    }catch (error) {
      throw (`Imposible modificar examen: ${error}`)
    }
  }

async function borrar(id){
    try{
     let examen = await Examen.findOneAndDelete({_id: id})
     if(!examen){
        throw 'No se encontro examen'
       }
     return `Se borro correctamente el examen`
    }catch (error) {
      throw (`Imposible borrar user: ${error}`)
    }}

module.exports ={post, get, borrar, put}