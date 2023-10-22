const express = require('express')
const router = express.Router();
const controlersCarreras = require('../controlers/carreras')
const middlewares = require('../middlewares/logged')

router.use(middlewares.logged)


router.post('/carreras', controlersCarreras.post)


module.exports=router