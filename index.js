const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000;

console.log('String de Conexão MongoDB:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.send('Bem-vindo à minha aplicação com MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});