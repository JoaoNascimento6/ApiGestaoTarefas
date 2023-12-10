'use strict';

var utils = require('../utils/writer.js');
var Tarefa = require('../service/TarefaService');

module.exports.listartarefasUserIdDataVencimentoGET = function listartarefasUserIdDataVencimentoGET (req, res, next, userId, dataVencimento) {
  Tarefa.listartarefasUserIdDataVencimentoGET(userId, dataVencimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartarefasUserIdEstadoGET = function listartarefasUserIdEstadoGET (req, res, next, userId, estado) {
  Tarefa.listartarefasUserIdEstadoGET(userId, estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartarefasUserIdEstadoPATCH = function listartarefasUserIdEstadoPATCH (req, res, next, body, userId, estado) {
  Tarefa.listartarefasUserIdEstadoPATCH(body, userId, estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartarefasUserIdGET = function listartarefasUserIdGET (req, res, next, userId) {
  Tarefa.listartarefasUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartarefasUserIdPrioridadeGET = function listartarefasUserIdPrioridadeGET (req, res, next, userId, prioridade) {
  Tarefa.listartarefasUserIdPrioridadeGET(userId, prioridade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listartodasUserIdGET = function listartodasUserIdGET (req, res, next, userId) {
  Tarefa.listartodasUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefaPOST = function tarefaPOST (req, res, next, body) {
  Tarefa.tarefaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasTarefaIdDELETE = function tarefasTarefaIdDELETE (req, res, next, tarefaId) {
  Tarefa.tarefasTarefaIdDELETE(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasTarefaIdGET = function tarefasTarefaIdGET (req, res, next, tarefaId) {
  Tarefa.tarefasTarefaIdGET(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasTarefaIdPUT = function tarefasTarefaIdPUT (req, res, next, body, tarefaId) {
  Tarefa.tarefasTarefaIdPUT(body, tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
