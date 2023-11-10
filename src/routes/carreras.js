const express = require('express')
const router = express.Router();
const controlersCarreras = require('../controlers/carreras')
const middlewaresLogged = require('../middlewares/logged')
const middlewares = require('../middlewares/users')

router.use(middlewaresLogged.logged)


router.post('/carreras', middlewares.adminValidacion, controlersCarreras.post)
router.get('/carrera', middlewares.adminValidacion, controlersCarreras.get)
router.delete('/carrera', middlewares.adminValidacion, controlersCarreras.borrar)
router.put('/carrera/:carreraId', middlewares.adminValidacion, controlersCarreras.put)

module.exports=router