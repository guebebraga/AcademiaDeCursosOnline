const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/users')
const controlerStudents = require('../controlers/allStudents')
const middlewares = require('../middlewares/users')
const middlewaresLogged =require('../middlewares/logged');
const { route } = require('./materias');

router.use(middlewaresLogged.logged)

router.post('/users', middlewares.rolValidation, middlewares.adminValidacion, controlersUser.post)
router.delete('/user', middlewares.adminValidacion, controlersUser.borrar)
router.put('/user/:userId', middlewares.adminValidacion, controlersUser.put)
router.get('/students', middlewares.profesorValidacion, controlerStudents.get)
router.get('/profile',controlersUser.profile)
router.get('/profes', controlersUser.profes)

module.exports= router

//