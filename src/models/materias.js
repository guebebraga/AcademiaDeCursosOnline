const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');


const materiasSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    examenes: {type: String, required: true},
    alumnosId: [{type: String}],
    carrera: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'carreras', 
    }
},{timestamps: true})
//
const Materias = mongoose.model('materias', materiasSchema);
//
async function get (_id){
  try{
    console.log('estoy en models')
    let materia = await Materias.findOne({_id:_id}).populate('carrera');
    return materia;

}catch (error) {
  throw (`Imposible retornar materia: ${error}`)
}
}

async function post(data) {
  try{
    const nuevaMateria = new Materias(data)
    nuevaMateria.save(); 
    return nuevaMateria

  }catch (error) {
    throw ('Imposible insertar Carrera')
  }
}

async function put(datos, id){
  try{
    const materia = await Materias.findByIdAndUpdate(id, datos, { new: true });
    return materia
  }catch (error) {
    throw (`Imposible modificar user: ${error}`)
  }
}

async function borrar(id){
  try{
   let materia = await Materias.findOneAndDelete({_id: id})
   if(!materia){
    throw 'No se encontro materia'
   }
   return `Se borro correctamente el materia`
  }catch (error) {
    throw (`Imposible borrar user: ${error}`)
  }}
//agrego esta funcion con el fin de asociar alumnos y materias 
  async function matAlumno (_id){
    try{
      let materia = await Materias.findOne({_id:_id})
      return materia;
  
  }catch (error) {
    throw (`Imposible retornar materia: ${error}`)
  }s
  }

module.exports = {post, get, borrar, put, matAlumno}


