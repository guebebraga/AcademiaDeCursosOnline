const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');


const carrerasSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    cantMaterias: String,
    ordenMaterias: String,
    cronograma: String,

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

module.exports = {post}
