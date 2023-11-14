const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/users')
const controlerStudents = require('../controlers/allStudents')
const middlewares = require('../middlewares/users')
const middlewaresLogged =require('../middlewares/logged')

router.use(middlewaresLogged.logged)

router.post('/users', middlewares.rolValidation, middlewares.adminValidacion, controlersUser.post)
router.delete('/user', middlewares.adminValidacion, controlersUser.borrar)
router.put('/user/:userId', middlewares.adminValidacion, controlersUser.put)
router.get('/students', controlerStudents.get)

module.exports= router

//