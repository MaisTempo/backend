const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const api = express()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

api.get('/', (req, res) => {
    return res.send('API para Projeto MaisTempo')
})

const devController = require('./controllers/empresa')
api.get('/empresas', devController.index);

api.listen(process.env.PORT || 8080)