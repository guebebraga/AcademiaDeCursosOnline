const express = require('express')
const router = express.Router();
const controlersUser = require('../controlers/users')


router.get('/user', controlersUser.get)


module.exports= router
