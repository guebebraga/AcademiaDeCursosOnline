const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/users')
const middlewares = require('../middlewares/users')

//router.use(middlewares.adminValidation)

router.post('/users', middlewares.adminValidation, middlewares.rolValidation, controlersUser.post)


module.exports= router

