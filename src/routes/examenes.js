const express = require('express')
const router = express.Router();
const controlersExam = require('../controlers/examenes')
const middlewares = require('../middlewares/logged')

router.use(middlewares.logged)


router.post('/examenes', controlersExam.post)
router.get('/examenes', controlersExam.get)


module.exports=router