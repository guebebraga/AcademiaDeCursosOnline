const express = require('express')
const router = express.Router();
const controlersMaterias = require('../controlers/materias')
const middlewaresLogged = require('../middlewares/logged')

router.use(middlewaresLogged.logged)

router.post('/materias', controlersMaterias.post)
router.get('/materia', controlersMaterias.get)
router.delete('/materia',controlersMaterias.borrar)
router.put('/materia/:materiaId',controlersMaterias.put)

module.exports= router