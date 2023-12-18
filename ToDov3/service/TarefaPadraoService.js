'use strict';

const TarefaPadrao = require('../models/TarefaPadrao');
const User = require('../models/User');

exports.associaTarefapadraoUser = function (body, userId, tarefaId) {
  return new Promise(function (resolve, reject) {
    Promise.all([
      User.findById(userId),
      TarefaPadrao.findById(tarefaId),
    ])
      .then(([user, tarefaPadrao]) => {
        if (!user || !tarefaPadrao) {
          const error = {
            status: 400,
            message: 'Usuário ou tarefa não encontrada.',
          };
          reject(error);
        } else {
          user.tarefasPadrao.push(tarefaPadrao);
          return user.save();
        }
      })
      .then((userAtualizado) => {
        const mappedResult = {
          userId: userAtualizado.userId,
          tarefasId: userAtualizado.tarefasPadrao.map((tarefa) => tarefa.tarefaId),
        };

        resolve(mappedResult);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.deleteTarefaspadrao = function (tarefaId) {
  return new Promise(function (resolve, reject) {
    TarefaPadrao.deleteOne({ tarefaId: tarefaId })
      .then((result) => {
        if (result.deletedCount === 0) {
          const error = {
            status: 404,
            message: 'Tarefa não encontrada.',
          };
          reject(error);
        } else {
          resolve();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.listarTarefaspadrao = function () {
  return new Promise(function (resolve, reject) {
    TarefasPadrao.find({})
      .then((tarefasPadrao) => {
        if (tarefasPadrao.length === 0) {
          const error = {
            status: 404,
            message: 'Não foram encontradas Tarefas Padrão.',
          };
          reject(error);
        } else {
          const mappedResult = tarefasPadrao.map((tarefa) => ({
            tarefaId: tarefa.tarefaId,
            título: tarefa.título,
            descrição: tarefa.descrição,
            dataVencimento: tarefa.dataVencimento.toISOString(),
            prioridade: tarefa.prioridade,
            estado: tarefa.estado,
          }));

          resolve(mappedResult);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.updateDataTarefaspadrao = function (body, tarefaId, dataVencimento) {
  return new Promise(function (resolve, reject) {
    const novaDataVencimento = new Date(body.dataVencimento);

    TarefasPadrao.findOneAndUpdate(
      { tarefaId: tarefaId },
      { dataVencimento: novaDataVencimento },
      { new: true }
    )
      .then((tarefaAtualizada) => {
        if (!tarefaAtualizada) {
          const error = {
            status: 404,
            message: 'Tarefa não encontrada.',
          };
          reject(error);
        } else {
          const mappedResult = {
            tarefaId: tarefaAtualizada.tarefaId,
            título: tarefaAtualizada.título,
            descrição: tarefaAtualizada.descrição,
            dataVencimento: tarefaAtualizada.dataVencimento.toISOString(),
            prioridade: tarefaAtualizada.prioridade,
            estado: tarefaAtualizada.estado,
          };

          resolve(mappedResult);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
