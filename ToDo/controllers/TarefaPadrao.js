'use strict';

var utils = require('../utils/writer.js');
var TarefaPadrao = require('../service/TarefaPadraoService');

module.exports.alterarTarefaPadraoTarefaIdDataVencimentoPATCH = function alterarTarefaPadraoTarefaIdDataVencimentoPATCH (req, res, next, body, tarefaId, dataVencimento) {
  TarefaPadrao.alterarTarefaPadraoTarefaIdDataVencimentoPATCH(body, tarefaId, dataVencimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartarefasPadraoTarefaIdDELETE = function listartarefasPadraoTarefaIdDELETE (req, res, next, tarefaId) {
  TarefaPadrao.listartarefasPadraoTarefaIdDELETE(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartarefasPadraoTarefaIdGET = function listartarefasPadraoTarefaIdGET (req, res, next, tarefaId) {
  TarefaPadrao.listartarefasPadraoTarefaIdGET(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasUsersUserIdTarefaIdPOST = function tarefasUsersUserIdTarefaIdPOST (req, res, next, body, userId, tarefaId) {
  TarefaPadrao.tarefasUsersUserIdTarefaIdPOST(body, userId, tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
