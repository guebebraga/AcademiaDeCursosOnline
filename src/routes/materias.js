const express = require('express')
const router = express.Router();
const controlersMaterias = require('../controlers/materias')
const middlewaresAdmin= require('../middlewares/users')

//router.use(middlewares.logged)

router.post('/materias', middlewaresAdmin.adminValidation, controlersMaterias.post)
router.get('/materias', middlewaresAdmin.adminValidation, controlersMaterias.get)

module.exports= router
//