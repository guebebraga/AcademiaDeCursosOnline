const express = require('express')
const router = express.Router();
const controlers = require('../controlers/index')
const middlewares = require('../middlewares/logged')
//router.use(middlewares.logged)

router.post('/users', controlers.post)
router.get('/users', /*middlewares.logged,*/ controlers.get)

module.exports= router
