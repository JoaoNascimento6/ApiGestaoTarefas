'use strict';

const User = require('../models/User');
const TarefaPadrao = require('../models/TarefaPadrao');
const Tarefa = require('../models/Tarefa');

exports.associaTarefapadraoUser = function(userId, tarefaId) {
  return new Promise(function(resolve, reject) {
    TarefaPadrao.findOne({ _id: tarefaId }, function(err, tarefaPadrao) {
      if (err) {
        reject(err);
      } else {
        const novaTarefa = new Tarefa({
          userId: userId,
          título: tarefaPadrao.título,
          descrição: tarefaPadrao.descrição,
          dataVencimento: tarefaPadrao.dataVencimento,
          prioridade: tarefaPadrao.prioridade,
          estado: tarefaPadrao.estado,
        });
        novaTarefa.save(function(err, tarefaCriada) {
          if (err) {
            reject(err);
          } else {
            const response = {
              userId: userId,
              tarefaId: tarefaCriada._id,
            };
            resolve(response);
          }
        });
      }
    });
  });
};

exports.criarTarefaPadrao = async function (body) {
  try {
    const novaTarefaPadrao = new TarefaPadrao({
      título: body.titulo,
      descrição: body.descricao,
      dataVencimento: body.dataVencimento,
      prioridade: body.prioridade,
      estado: body.estado,
      tarefaId: body.tarefaId,
    });

   
    const tarefaPadraoCriada = await novaTarefaPadrao.save();

    return tarefaPadraoCriada;
  } catch (err) {
    throw err;
  }
};

exports.deleteTarefaspadrao = function(queryParams) {
  return new Promise(function(resolve, reject) {
    const tarefaPadraoId = queryParams.tarefaId;
    if (!tarefaPadraoId) {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer o id.' });
      return;
    }
    TarefaPadrao.findOneAndDelete({ _id: tarefaPadraoId }, function(err, deletetarefa) {
      if (err) {
        reject(err);
      } else {
        if (deletetarefa) {
          resolve({ message: 'tarefa excluída com sucesso.' });
        } else {
          reject({ message: 'tarefa não encontrada para o ID fornecido.' });
        }
      }
    });
  });
};


exports.listarTarefaspadrao = function() {
  return new Promise(function(resolve, reject) {
    TarefaPadrao.find({}, function(err, tarefasPadrao) {
      if (err) {
        reject(err);
      } else {
        const resultado = tarefasPadrao.map(tarefaPadrao => ({
          tarefaId: tarefaPadrao.tarefaId,
          título: tarefaPadrao.título,
          descrição: tarefaPadrao.descrição,
          dataVencimento: tarefaPadrao.dataVencimento,
          prioridade: tarefaPadrao.prioridade,
          estado: tarefaPadrao.estado,
        }));
        resolve(resultado);
      }
    });
  });
};


exports.updateDataTarefaspadrao = function(queryParams, body) {
  return new Promise(function(resolve, reject) {
    const tarefaPadraoId = queryParams.tarefaId;
    const updateObject = {
      título: body.titulo,
      descrição: body.descricao,
      dataVencimento: body.dataVencimento,
      prioridade: body.prioridade,
      estado: body.estado,
    };
    TarefaPadrao.findByIdAndUpdate(tarefaPadraoId, updateObject, { new: true }, function(err, updatedTarefaPadrao) {
      if (err) {
        reject(err);
      } else {
        resolve(updatedTarefaPadrao);
      }
    });
  });
};