// Importando o módulo
const app = require('./app')

// PORT NUNMBER
const PORT = process.env.PORT || 3333;

// Setup do servidor
app.listen(PORT,console.log(`Servidor iniciado na porta: ${PORT}`));