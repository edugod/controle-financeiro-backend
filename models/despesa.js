const mongoose = require('mongoose');

const despesaSchema = new mongoose.Schema({
  dia: { type: Date, required: true },
  valor: { type: Number, required: true },
  observacao: { type: String },
});

// Definir o formato desejado ao serializar para JSON
despesaSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.dia = ret.dia.toLocaleDateString(); // Ajuste para formatar como DD/MM/YYYY
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model('Despesa', despesaSchema);
