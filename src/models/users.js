const mongoose = require('../config/mongo')
//const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt');
const redisClient = require ("../config/redis");//vichar sintaxis
require('dotenv').config();

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    username: {type: String, required: true, index:{ unique: true }},
    password : {type: String, required: true},
    rol: {type: String, required: true}
    /*usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'usuarios', 
    }*/
},{timestamps: true})

const User = mongoose.model('users', userSchema);

/*
let objectCache = await redisClient.HGET(collectionName, id)
  if(objectCache){
    console.log("retorno desde cache")
    return JSON.parse(objectCache)
  }

*/

async function profile(_id) {
  try {
    let profileCache = await redisClient.get(_id.toString()); //aca explota si le saco toString()
    if (profileCache) {
      console.log('De redis');
      // Parse the cached profile before returning it
      return JSON.parse(profileCache);
    }
    const profile = await User.findOne({ _id: _id });
    console.log('De mongo');
    return profile;
  } catch (error) {
    throw `Imposible retornar ${error}`;
  }
}
/*
async function get(user, pass){
  try{
    const res = await User.findOne({username:user})
    console.log(res)
    const compare = await bcrypt.compare(pass, res.password)
    console.log(compare)
    if(!compare){
      throw ('contraseña incorrecta')
    }
    console.log(user,pass)
    //guardo en cache 
    const userCache = JSON.stringify({
      _id:res._id,
      nombre:res.nombre,
      apellido:res.apellido,
      rol:res.rol
     })
     console.log(userCache)
     redisClient.set(res._id.valueOf(),userCache,{EX:parseInt(process.env.REDIS_TTL)})
     console.log(res._id.valueOf())
     console.log('guardado en cache')
     return res
     
  }
  catch (error) {
      throw (`imposible retornar ${error}`)
  }
}
*/
async function get(user, pass) {
  try {
    const res = await User.findOne({ username: user });
    if (!res) {
      throw 'Usuario no encontrado';
    }
    const compare = await bcrypt.compare(pass, res.password);

    if (!compare) {
      throw 'Contraseña incorrecta';
    }
    const userCache = JSON.stringify({
      _id: res._id,
      nombre: res.nombre,
      apellido: res.apellido,
      rol: res.rol,
    });
    // Guardo en cache
    redisClient.set(res._id.valueOf(), userCache, {
      EX: parseInt(process.env.REDIS_TTL),
    });
    console.log('Guardado en cache');
    console.log(userCache)
    // Solo retornar res si la comparación de contraseñas es exitosa
    return res;
  } catch (error) {
    throw `Imposible retornar ${error}`;
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

async function put(datos, id){
  try{
    const user = await User.findByIdAndUpdate(id, datos, { new: true });
    return user
  }catch (error) {
    throw (`Imposible modificar user: ${error}`)
  }
}

async function borrar(id){
  try{
   let user = await User.findOneAndDelete({_id: id})
   if(!user){
    throw 'No se encontro user'
   }
   return `Se borro correctamente el usuario`
  }catch (error) {
    throw (`Imposible borrar user: ${error}`)
  }}

  /*await Users.aggregate([
      { $match: { name: /Metal/ }}])); */

async function allStudents(){
  try{
    let allStudents = await User.aggregate([
      {
        $match: { rol: /Alumno/ig }
      },
      {
        $project: {
          nombre:1,
          apellido:1, 
          username:1,
          rol:1, 
          _id:1
        }
      }
    ]);
  
  return ('Todos los alumnos', allStudents)
  }catch(error){
    throw (`No se puedo retornar ${error}`)
  }
}


module.exports = {post, get, borrar, put, allStudents, profile}

