const express = require('express')
const entidadeController = require('./controllers/entidades')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})
routes.get('/entidades', entidadeController.index);
routes.post('/entidades', entidadeController.store);

module.exports = routes;