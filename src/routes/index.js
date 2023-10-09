const express = require('express')
const router = express.Router();
const controlers = require('../controlers/index')
const middlewares = require('../middlewares/index')
//router.use(middlewares.logged)

router.post('/user',/*middlewares*/controlers.post)

module.exports= router
//