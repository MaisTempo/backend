const express = require('express')

const api = express()

api.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})

api.listen(3333)