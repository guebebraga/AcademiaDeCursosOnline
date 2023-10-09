/*const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');
     
const blogSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    activa: Boolean,
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'usuarios', 
    }
},{timestamps: true})

const Blog = mongoose.model('blogs', blogSchema);

async function getBlog (titulo){
    try{
      console.log('estoy en models')
      let blog = await Blog.findOne({titulo:titulo}).populate('usuario')//.select('username');
      return blog;

  }catch (error) {
    throw (`Imposible retornar blog: ${error}`)
  }
}


module.exports = {crearblog, getBlog, borrarblog, retornarTodosLosBlogs}


*/