const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/users')

//router.use(middlewares.logged)

router.post('/users', controlersUser.post)


module.exports= router
