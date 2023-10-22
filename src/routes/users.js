const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/index')
const middlewares = require('../middlewares/logged')

router.use(middlewares.logged)

router.get('/users', controlersUser.get)


module.exports= router