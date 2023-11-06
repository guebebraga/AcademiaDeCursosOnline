const express = require('express')
const router = express.Router();
const controlersMaterias = require('../controlers/materias')
const middlewaresLogged = require('../middlewares/logged')

router.use(middlewaresLogged.logged)

router.post('/materias', controlersMaterias.post)
router.get('/materias', controlersMaterias.get)

module.exports= router