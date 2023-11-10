const express = require('express')
const router = express.Router();
const controlersCursos = require('../controlers/cursos')
const middlewaresLogged = require('../middlewares/logged')
const middlewares = require('../middlewares/users')

router.use(middlewaresLogged.logged)


router.post('/cursos', controlersCursos.post)
router.get('/curso', controlersCursos.get)
router.delete('/curso', controlersCursos.borrar)
router.put('/curso/:cursoId', controlersCursos.put)

module.exports=router