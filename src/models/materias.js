const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');

const materiasSchema = new mongoose.Schema({
    título: String,
    descripcion: String,
    examenes: String,
    carrera: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'carreras', 
    }
},{timestamps: true})

const Materias = mongoose.model('materias', materiasSchema);

module.exports={}