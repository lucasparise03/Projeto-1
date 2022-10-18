const express = require('express');
const controllerAPI = require('../controllers/controllerAPI');
const route = express.Router();

module.exports = route;

//ControllerAPI
    route.get("/api/receita/:id",controllerAPI.getReceitaById);
    route.get("/api/receitas",controllerAPI.getReceitas);
    route.post("/api/receita",controllerAPI.postReceita);
    route.put('/api/receita/:id',controllerAPI.putReceita);
    route.delete('/api/receita/:id',controllerAPI.deleteReceita);
    