'use strict';

var utils = require('../utils/writer.js');
var TarefaPadrao = require('../service/TarefaPadraoService');

module.exports.associaTarefapadraoUser = function associaTarefapadraoUser(req, res, next) {
  const userId = req.params.userId;
  const tarefaId = req.params.tarefaId;
  TarefaPadraoService.associaTarefapadraoUser(userId, tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, { error: error.message || "Erro desconhecido" }, 500);
    });
};

module.exports.criarTarefaPadrao = function criarTarefaPadrao (req, res, next, body) {
  TarefaPadrao.criarTarefaPadrao(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTarefaspadrao = function deleteTarefaspadrao (req, res, next) {
  const tarefaId = req.query.tarefaId;
  TarefaPadrao.deleteTarefaspadrao(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listarTarefaspadrao = function listarTarefaspadrao (req, res, next) {
  TarefaPadrao.listarTarefaspadrao()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDataTarefaspadrao = function updateDataTarefaspadrao (req, res, next, body) {
  const tarefaId = req.query.tarefaId;
  TarefaPadrao.updateDataTarefaspadrao(body, tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
