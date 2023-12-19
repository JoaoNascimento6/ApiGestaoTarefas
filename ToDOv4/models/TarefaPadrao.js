const mongoose = require('mongoose');

const TarefasPadraoSchema = new mongoose.Schema({
  dataVencimento: {
    type: Date,
    required: true,
  },
  descrição: {
    type: String,
    minlength: 10,
    maxlength: 200,
    required: true,
  },
  estado: {
    type: String,
    enum: ["concluido", "Hoje", "Agendado"],
    required: true,
  },
  prioridade: {
    type: Number,
    min: 0,
    max: 20,
    required: true,
  },
  tarefaId: {
    type: String,
    match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
  },
  título: {
    type: String,
    minlength: 4,
    maxlength: 30,
    required: true,
  },
});

const TarefasPadrao = mongoose.model('TarefasPadrao', TarefasPadraoSchema);

module.exports = TarefasPadrao;
