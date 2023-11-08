const express = require('express')
const router = express.Router();
const controlersExam = require('../controlers/examenes')
const middlewares = require('../middlewares/logged')

router.use(middlewares.logged)


router.post('/examenes', controlersExam.post)
router.get('/examene', controlersExam.get)
router.delete('/examen', controlersExam.borrar)
router.put('/examen/:examenId', controlersExam.put)

module.exports=router