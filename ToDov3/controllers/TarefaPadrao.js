'use strict';

var utils = require('../utils/writer.js');
var TarefaPadrao = require('../service/TarefaPadraoService');

module.exports.associaTarefapadraoUser = function associaTarefapadraoUser(req, res, next, body, userId, tarefaId) {
  TarefaPadrao.associaTarefapadraoUser(body, userId, tarefaId)
    .then(function (response) {
      if (response) {
        utils.writeJson(res, response, 200);
      } else {
        utils.writeJson(res, { message: 'Falha ao associar tarefa padrão ao usuário.' }, 400);
      }
    })
    .catch(function (error) {
      utils.writeJson(res, { message: 'Erro interno do servidor.' }, 500);
    });
};

module.exports.deleteTarefaspadrao = function deleteTarefaspadrao(req, res, next, tarefaId) {
  TarefaPadrao.deleteTarefaspadrao(tarefaId)
    .then(function (response) {
      if (response) {
        utils.writeJson(res, {}, 204);
      } else {
        utils.writeJson(res, { message: 'Tarefa não encontrada.' }, 404);
      }
    })
    .catch(function (error) {
      utils.writeJson(res, { message: 'Erro interno do servidor.' }, 500);
    });
};

module.exports.listarTarefaspadrao = function listarTarefaspadrao(req, res, next) {
  TarefaPadrao.listarTarefaspadrao()
    .then(function (response) {
      if (response && response.length > 0) {
        utils.writeJson(res, response, 200);
      } else {
        utils.writeJson(res, { message: 'Não foram encontradas Tarefas Padrão.' }, 404);
      }
    })
    .catch(function (error) {
      utils.writeJson(res, { message: 'Erro interno do servidor.' }, 500);
    });
};

module.exports.updateDataTarefaspadrao = function updateDataTarefaspadrao(req, res, next, body, tarefaId, dataVencimento) {
  TarefaPadrao.updateDataTarefaspadrao(body, tarefaId, dataVencimento)
    .then(function (response) {
      if (response) {
        utils.writeJson(res, response, 200);
      } else {
        utils.writeJson(res, { message: 'Tarefa não encontrada.' }, 404);
      }
    })
    .catch(function (error) {
      utils.writeJson(res, { message: 'Erro interno do servidor.' }, 500);
    });
};
