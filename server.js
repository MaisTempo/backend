const express = require('express')
const devController = require('./controllers/empresa')

const api = express()

api.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})

api.get('/empresas', devController.index);

api.listen(process.env.PORT || 8080)