const express = require('express')
const router = express.Router();
const controlersCarreras = require('../controlers/carreras')
const middlewaresLogged = require('../middlewares/logged')
const middlewaresAdmin = require('../middlewares/users')


router.use(middlewaresLogged.logged)


router.post('/carreras', middlewaresAdmin.adminValidation, controlersCarreras.post)


module.exports=router