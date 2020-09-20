const express = require('express')
const entidadeController = require('./controllers/entidade')
const finalidadeController = require('./controllers/finalidade')
const consultaController = require('./controllers/consulta')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})
routes.get('/entidades', entidadeController.index);
routes.post('/entidades', entidadeController.store);
routes.get('/bot/entidades', entidadeController.bot);

routes.get('/finalidades', finalidadeController.index)
routes.get('/finalidades/:entidadeId', consultaController.index)
routes.post('/bot/finalidades', consultaController.bot)
routes.post('/finalidades', finalidadeController.store)

module.exports = routes;