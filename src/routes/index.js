const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/index')
/*const controlersCarreras = require('../controlers/carreras')*/

//const middlewares = require('../middlewares/logged')
//router.use(middlewares.logged)

router.post('/users', controlersUser.post)
/*router.get('/users', middlewares.logged, controlersUser.get)*/
/*router.post('/carreras', middlewares.logged, controlersCarreras.post)*/


module.exports= router
