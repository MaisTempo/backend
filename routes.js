const express = require('express')
const devController = require('./controllers/empresa')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})
routes.get('/empresas', devController.index);
routes.post('/empresas', devController.store);

module.exports = routes;