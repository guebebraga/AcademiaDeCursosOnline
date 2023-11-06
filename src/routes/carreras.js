const express = require('express')
const router = express.Router();
const controlersCarreras = require('../controlers/carreras')
const middlewaresLogged = require('../middlewares/logged')


router.use(middlewaresLogged.logged)


router.post('/carreras', controlersCarreras.post)
router.get('/carrera',controlersCarreras.get)

module.exports=router