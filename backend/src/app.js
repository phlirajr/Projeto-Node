// Requisitando os módulo utilizados
const express = require('express');
const router = require('./router')

// Criando um objeto do tipo express
const app = express();

// Indica que toda requisição que acontecer para nossa aplicação vai ser enviada para o router
app.use(express.json());
app.use(router);


//Exportando os módulos
module.exports = app;