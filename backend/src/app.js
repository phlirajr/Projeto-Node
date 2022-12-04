// Requisitando módulo express
const express = require('express');

// Criando um objeto do tipo express
const app = express();

// GET Request
app.get('/',(req, res) => {
    res.status(200).send('A simple Node app is running on this server');
    res.end;
});

//Exportando os módulos
module.exports = app;