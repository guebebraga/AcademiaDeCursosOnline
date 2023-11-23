const mongoose = require('mongoose');
const redisClient = require ("../config/redis.js");

const execOriginal = mongoose.Query.prototype.exec;

mongoose.Query.prototype.noCache = async function () {
  console.log("entro al metodo .cache")
  this.noCache = true
  return this
}

mongoose.Query.prototype.exec = async function () {

  console.log("=========  INICIO LOGICA DE CACHE ==============")

  if(this.noCache === true){
    console.log("no utilizo cache");
    return await execOriginal.apply(this, arguments);
  }


  const query = this.getQuery()
  const collectionName = this.mongooseCollection.name;

  if (!query.hasOwnProperty('_id')){
    console.log("No contiene ID, voy directamente a buscar a la DB")
    return await execOriginal.apply(this, arguments);
  } 

  const id = query._id

  //const key = `${this.mongooseCollection.name}-${query._id}`
  console.log(`trabajo con la collection name: ${collectionName} y el id: ${id}`)
    
  let objectCache = await redisClient.HGET(collectionName, id)
  if(objectCache){
    console.log("retorno desde cache")
    return JSON.parse(objectCache)
  }

  const mongoObject = await execOriginal.apply(this, arguments);
  console.log("CONSULTO A MONGODB y GUARDO EN CACHE")
 
  redisClient.HSET(collectionName, id, JSON.stringify(mongoObject), {EX: parseInt(process.env.REDIS_TTL)})

  return mongoObject

};


module.exports = mongoose