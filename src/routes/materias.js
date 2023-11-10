const express = require('express')
const router = express.Router();
const controlersMaterias = require('../controlers/materias')
const middlewaresLogged = require('../middlewares/logged')
const middlewares = require('../middlewares/users')

router.use(middlewaresLogged.logged)

router.post('/materias', middlewares.adminSupValidacion, controlersMaterias.post)
router.get('/materia', controlersMaterias.get)
router.delete('/materia',controlersMaterias.borrar)
router.put('/materia/:materiaId',controlersMaterias.put)

module.exports= router