const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/users')
const middlewares = require('../middlewares/users')
const middlewaresLogged =require('../middlewares/logged')

router.use(middlewaresLogged.logged)

router.post('/users', middlewares.rolValidation, controlersUser.post)
router.delete('/user', controlersUser.borrar)
router.put('/user/:userId', controlersUser.put)

module.exports= router

