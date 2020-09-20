const express = require("express");
const cors = require('cors');
const routes = require('./routes.js');
const mongoose = require("mongoose");

const api = express() 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

api.use(cors());
api.use(express.json());
api.use(routes);

api.listen(process.env.PORT || 8080)