const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');
     
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    username: String,
    password : String,
    rol: String,
    /*usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'usuarios', 
    }*/
},{timestamps: true})

const User = mongoose.model('users', userSchema);

async function get(user, pass){
  try{
      console.log(user)
      console.log(pass)
      const res = await User.findOne({username:user})
      console.log(res)
      const compare = await bcrypt.compare(pass, res.password)
      console.log(compare)
      if(!compare){
        throw ('contraseña incorrecta')
      }
      console.log(user,pass)
      return (res)
  }
  catch (error) {
      throw (`imposible retornar ${error}`)
  }
}

async function post (datos){
  try {
    const newUser = new User(datos);
    const salt = await bcrypt.genSalt(10)
    const passHashed = await bcrypt.hash(newUser.password, salt)
    newUser.password = passHashed
    newUser.save();
    return newUser
  }catch (error) {
    throw (`Imposible postear user: ${error}`)
  }
}

async function borrar(id){
  try{
   let user = await User.findOneAndDelete({_id: id})
   return `Se borro correctamente el usuario ${user.username}`
  }catch (error) {
    throw (`Imposible borrar user: ${error}`)
  }}



module.exports = {post, get, borrar}

