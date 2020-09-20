const express = require('express')

const api = express()

api.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})

api.listen(process.env.PORT || 8080)