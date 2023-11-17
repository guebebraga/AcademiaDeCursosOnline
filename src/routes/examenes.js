const express = require('express')
const router = express.Router();
const controlersExam = require('../controlers/examenes')
const middlewaresLogged = require('../middlewares/logged')
const middlewares = require('../middlewares/users')

router.use(middlewaresLogged.logged)


router.post('/examenes', middlewares.supValidacion, controlersExam.post)
router.get('/examene', controlersExam.get)
router.delete('/examen', controlersExam.borrar)
router.put('/examen/:examenId', controlersExam.put)

module.exports=router