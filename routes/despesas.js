const express = require('express');
const Despesa = require('../models/despesa');

const router = express.Router();

// Rota para obter todas as despesas
router.get('/', async (request, response) => {
  try {
    const despesas = await Despesa.find({});
    response.setHeader('Content-Type', 'application/json');
    response.json(despesas);
  } catch (error) {
    console.error('Erro na consulta ao MongoDB:', error);
    response.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para criar uma nova despesa
router.post('/', async (request, response) => {
  try {
    const novaDespesa = new Despesa({
      dia: request.body.dia,
      valor: request.body.valor,
      observacao: request.body.observacao,
    });

    // Salvar a nova despesa no banco de dados
    await novaDespesa.save();

    // Responder com uma mensagem de sucesso ou a despesa criada
    response.status(201).json({ message: 'Despesa criada com sucesso', data: novaDespesa });
  } catch (error) {
    console.error('Erro ao criar despesa:', error);
    response.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
