const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  tarefaId: {
    type: String,
    match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
  },
  userId: {
    type: String,
    match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
    required: true,
  },
  título: {
    type: String,
    minlength: 1,
    required: true,
  },
  descrição: {
    type: String,
    required: true,
  },
  dataVencimento: {
    type: Date,
    required: true,
  },
  prioridade: {
    type: Number,
    min: 0,
    max: 20,
    required: true,
  },
  estado: {
    type: String,
    enum: ["Concluido", "Hoje", "Agendado"],
    required: true,
  },
});

const Tarefa = mongoose.model('tarefa', TarefaSchema);

module.exports = Tarefa;
