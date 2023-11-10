const mongoose = require('../config/mongo')

/*
username: { type: String, required: true, index: { unique: true } },
password: { type: String, required: true, select: false }
*/

const cursosSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    duracion: String,
    cargaHoraria: String,

},{timestamps: true})

const Cursos = mongoose.model('cursos',cursosSchema);

async function post(data) {
    try{
      const nuevoCurso = new Cursos(data)
      nuevoCurso.save(); 
      return nuevoCurso
  
    }catch (error) {
      throw ('Imposible insertar Curso')
    }
  }
  
  async function get(_id){
    try{
        let curso= await Cursos.findOne({_id:_id})//.populate('materia')
        return curso;
  
    }catch(error){
        throw (`No se pudo retornar curso ${error}`)
    }
  }
  
  async function put(datos, id){
    try{
      const curso = await Cursos.findByIdAndUpdate(id, datos, { new: true });
      return curso
    }catch (error) {
      throw (`Imposible modificar curso: ${error}`)
    }
  }
  
  async function borrar(id){
    try{
     let curso = await Cursos.findOneAndDelete({_id: id})
     if(!curso){
      throw `No se encontro curso`
     }
     return `Se borro correctamente la curso`
    }catch (error) {
      throw (`Imposible borrar curso: ${error}`)
    }}
  
  module.exports = {post, get, borrar, put}
  