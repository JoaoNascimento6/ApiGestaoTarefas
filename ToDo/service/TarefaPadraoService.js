'use strict';
const mongoose = require('mongoose')

/**
 * Atualizar a descrição de uma tarefa por ID
 * Atualiza a descrição de uma tarefa registada pelo seu ID
 *
 * body TarefaId_dataVencimento_body Objeto contendo a nova descrição da tarefa
 * tarefaId UUID 
 * dataVencimento String 
 * returns tarefasPadrao
 **/
exports.alterarTarefaPadraoTarefaIdDataVencimentoPATCH = function(body,tarefaId,dataVencimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tarefaId" : "550e8400-e29b-41d4-a726-446655440044",
  "título" : "Terminar Relatorio",
  "descrição" : "Corrigir relatório sobre o desempenho mensal",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 19,
  "estado" : "Hoje"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar uma tarefa padrao por ID
 * Elimina uma tarefa registada pelo seu ID
 *
 * tarefaId UUID 
 * no response value expected for this operation
 **/
exports.listartarefasPadraoTarefaIdDELETE = function(tarefaId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of predefined tasks
 * Returns all registered tasks
 *
 * tarefaId UUID 
 * returns tarefasPadrao
 **/
exports.listartarefasPadraoTarefaIdGET = function(tarefaId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tarefaId" : "550e8400-e29b-41d4-a726-446655440044",
  "título" : "Terminar Relatorio",
  "descrição" : "Corrigir relatório sobre o desempenho mensal",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 19,
  "estado" : "Hoje"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Criar uma nova tarefa
 * Associar uma tarefa padrao a um User.
 *
 * body TarefaPadraosUser 
 * userId UUID 
 * tarefaId UUID 
 * no response value expected for this operation
 **/
exports.tarefasUsersUserIdTarefaIdPOST = function(body,userId,tarefaId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

