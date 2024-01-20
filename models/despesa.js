const mongoose = require('mongoose');

const despesaSchema = new mongoose.Schema({
  dia: { type: Date, required: true },
  valor: { type: Number, required: true },
  observacao: { type: String },
});

const Despesa = mongoose.model('Despesa', despesaSchema);

module.exports = Despesa;