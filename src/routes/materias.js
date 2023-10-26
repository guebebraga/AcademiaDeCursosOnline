const express = require('express')
const router = express.Router();
const controlersMaterias = require('../controlers/materias')

//router.use(middlewares.logged)

router.post('/materias', controlersMaterias.post)
router.get('/materias', controlersMaterias.get)

module.exports= router
//