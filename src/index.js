require('dotenv').config()
const express = require('express')
const academiaDeCursos = require('./routes/index')
const app = express()
app.use(express.json())

app.use('/',academiaDeCursos)