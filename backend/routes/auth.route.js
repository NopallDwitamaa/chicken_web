const express = require('express')
const {authenticate} = require('../controllers/auth.controller')

const app = express()

app.use(express.json())

app.post('/', authenticate)

module.exports = app