'use strict';

var utils = require('../utils/writer.js');
var Tarefa = require('../service/TarefaService');

module.exports.criarTarefas = function criarTarefas (req, res, next, body) {
  Tarefa.criarTarefas(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTarefas = function deleteTarefas (req, res, next) {
  const tarefaId = req.query.tarefaId;
  Tarefa.deleteTarefas(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarDataTarefas = function listarDataTarefas (req, res, next) {
  const userId = req.query.userId;
  const dataVencimento = req.query.dataVencimento;
  Tarefa.listarDataTarefas(userId, dataVencimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarEstadoTarefas = function listarEstadoTarefas (req, res, next) {
  const userId = req.query.userId;
  const estado = req.query.estado;
  Tarefa.listarEstadoTarefas(userId, estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarIdTarefas = function listarIdTarefas (req, res, next) {
  const tarefaId = req.query.tarefaId;
  Tarefa.listarIdTarefas(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarPrioridadeTarefas = function listarPrioridadeTarefas (req, res, next) {
  const userId = req.query.userId;
  const prioridade = req.query.prioridade;
  Tarefa.listarPrioridadeTarefas(userId, prioridade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarTodasTarefas = function listarTodasTarefas (req, res, next) {
  const userId = req.query.userId;
  Tarefa.listarTodasTarefas(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEstadoTarefas = function updateEstadoTarefas (req, res, next, body) {
  const userId = req.query.userId;
  const estado = req.query.estado;
  Tarefa.updateEstadoTarefas(body, userId, estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateIdTarefas = function updateIdTarefas (req, res, next, body) {
  const tarefaId = req.query.tarefaId;
  Tarefa.updateIdTarefas(body, tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
