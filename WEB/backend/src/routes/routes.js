const express = require('express');
const Atleta = require('../controllers/atletaController');

const routes = express.Router();

routes.post("/cadastrarAtleta", Atleta.cadastrarAtleta);
routes.get("/read", Atleta.buscarUsuario)

module.exports = routes;