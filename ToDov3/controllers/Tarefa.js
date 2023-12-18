'use strict';

var utils = require('../utils/writer.js');
var Tarefa = require('../service/TarefaService');

module.exports.criarTarefas = function criarTarefas(req, res, next, body) {
  Tarefa.criarTarefas(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTarefas = function deleteTarefas(req, res, next, tarefaId) {
  Tarefa.deleteTarefas(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarDataTarefas = function listarDataTarefas(req, res, next, userId, dataVencimento) {
  Tarefa.listarDataTarefas(userId, dataVencimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarEstadoTarefas = function listarEstadoTarefas(req, res, next, userId, estado) {
  Tarefa.listarEstadoTarefas(userId, estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarIdTarefas = function listarIdTarefas(req, res, next, tarefaId) {
  Tarefa.listarIdTarefas(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

async function handleListResponse(res, serviceFunction, ...params) {
  try {
    const response = await serviceFunction(...params);
    utils.writeJson(res, response);
  } catch (error) {
    utils.writeJson(res, error);
  }
}

module.exports.listarPrioridadeTarefas = async function listarPrioridadeTarefas(req, res, next, userId, prioridade) {
  await handleListResponse(res, Tarefa.listarPrioridadeTarefas, userId, prioridade);
};

module.exports.listarTodasTarefas = async function listarTodasTarefas(req, res, next, userId) {
  await handleListResponse(res, Tarefa.listarTodasTarefas, userId);
};

module.exports.updateEstadoTarefas = async function updateEstadoTarefas(req, res, next, body, userId, estado) {
  try {
    const response = await Tarefa.updateEstadoTarefas(body, userId, estado);
    utils.writeJson(res, response);
  } catch (error) {
    utils.writeJson(res, error);
  }
};

module.exports.updateIdTarefas = function updateIdTarefas(req, res, next, body, tarefaId) {
  Tarefa.updateIdTarefas(body, tarefaId)
    .then(function (response) {
      if (response.status) {
        res.status(response.status).json({ message: response.message, error: response.error });
      } else {
        utils.writeJson(res, response);
      }
    })
    .catch(function (response) {
      res.status(500).json({ message: 'Erro interno do servidor.', error: response });
    });
};