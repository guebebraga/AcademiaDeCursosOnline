const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');

const materiasSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    examenes: String,
    carrera: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'carreras', 
    }
},{timestamps: true})
//
const Materias = mongoose.model('materias', materiasSchema);
//
async function post(data) {
  try{
    const nuevaMateria = new Materias(data)
    nuevaMateria.save(); 
    return nuevaMateria

  }catch (error) {
    throw ('Imposible insertar Carrera')
  }
}

async function get (_id){
  try{
    console.log('estoy en models')
    let materia = await Blog.findOne({_id:_id})//.populate('carrera')//.select('username');
    return materia;

}catch (error) {
  throw (`Imposible retornar blog: ${error}`)
}
}

module.exports = {post, get}


module.exports={}