const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');


const carrerasSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    cantMaterias: {type: String, required: true},
    ordenMaterias: {type: String, required: true},
    cronograma: {type: String, required: true},
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', 
    }

},{timestamps: true})

const Carreras = mongoose.model('carreras',carrerasSchema);

async function post(data) {
  try{
    const nuevaCarrera = new Carreras(data)
    nuevaCarrera.save(); 
    return nuevaCarrera

  }catch (error) {
    throw ('Imposible insertar Carrera')
  }
}

async function get(_id){
  try{
      let carrera= await Carreras.findOne({_id:_id}).populate('supervisor')
      return carrera;

  }catch(error){
      throw (`No se pudo retornar carrera ${error}`)
  }
}

async function put(datos, id){
  try{
    const carrera = await Carreras.findByIdAndUpdate(id, datos, { new: true });
    return carrera
  }catch (error) {
    throw (`Imposible modificar carrera: ${error}`)
  }
}

async function borrar(id){
  try{
   let carrera = await Carreras.findOneAndDelete({_id: id})
   if(!carrera){
    throw 'No se encontro carrera'
   }
   return `Se borro correctamente la carrera ${carrera.titulo}`
  }catch (error) {
    throw (`Imposible borrar carrera: ${error}`)
  }}

module.exports = {post, get, borrar, put}
