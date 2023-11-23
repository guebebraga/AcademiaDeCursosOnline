const mongoose = require('mongoose');
require('dotenv').config();

// Establecemos la conexión con MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log(process.env.MONGO_URI)
// Manejamos eventos de conexión y error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Mongo connected');
});

module.exports = mongoose
