'use strict';
const mongoose = require('mongoose');

const Tarefa = require('../models/Tarefa');

exports.criarTarefas = function(body) {
  return new Promise(function(resolve, reject) {
    // Verifica se todos os campos obrigatórios estão presentes
    if (!body.userId || !body.título || !body.descrição || !body.dataVencimento || !body.prioridade || !body.estado) {
      reject(new Error('Todos os campos são obrigatórios.'));
      return;
    }
    const novaTarefa = new Tarefa({
      userId: body.userId,
      título: body.título,
      descrição: body.descrição,
      dataVencimento: body.dataVencimento,
      prioridade: body.prioridade,
      estado: body.estado,
    });
    novaTarefa.save()
      .then(function(tarefaCriada) {
        resolve(tarefaCriada);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};


exports.deleteTarefas = function(tarefaId) {
  return new Promise(function(resolve, reject) {
    Tarefa.findByIdAndDelete(tarefaId, function(err, deletedTarefa) {
      if (err) {
        reject(err);
      } else {
        resolve(deletedTarefa);
      }
    });
  });
};


exports.listarDataTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const userId = req.query.userId;
    const dataVencimento = req.query.dataVencimento;

    Tarefa.find({ userId: userId, dataVencimento: dataVencimento }, function(err, tarefas) {
      if (err) {
        reject(err);
      } else {
        const response = {
          dataVencimento: dataVencimento,
          tarefas: tarefas,
        };
        resolve([response]);
      }
    });
  });
};

exports.listarEstadoTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const userId = req.query.userId;
    const estado = req.query.estado;

    Tarefa.find({ userId: userId, estado: estado }, function(err, tarefas) {
      if (err) {
        reject(err);
      } else {
        const response = {
          estado: estado,
          tarefas: tarefas,
        };
        resolve([response]);
      }
    });
  });
};

exports.listarIdTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const tarefaId = req.query.tarefaId;

    Tarefa.findOne({ _id: tarefaId }, function(err, tarefa) {
      if (err) {
        reject(err);
      } else {
        resolve(tarefa);
      }
    });
  });
};

exports.listarPrioridadeTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const userId = req.query.userId;
    const prioridade = req.query.prioridade;

    Tarefa.find({ userId: userId, prioridade: prioridade }, function(err, tarefas) {
      if (err) {
        reject(err);
      } else {
        const response = {
          prioridade: prioridade,
          tarefas: tarefas,
        };
        resolve([response]);
      }
    });
  });
};

exports.listarTodasTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const userId = req.query.userId;

    Tarefa.find({ userId: userId }, function(err, tarefas) {
      if (err) {
        reject(err);
      } else {
        const response = {
          userId: userId,
          tarefas: tarefas,
        };

        resolve([response]);
      }
    });
  });
};

exports.updateEstadoTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const userId = req.query.userId;
    const tarefaId = req.query.tarefaId;
    const estado = req.query.estado;

    const estadosPermitidos = ['concluido', 'Hoje', 'Agendado'];
    if (!estadosPermitidos.includes(estado)) {
      return reject(new Error('Estado inválido'));
    }
    const updateObject = {
      estado: estado,
    };
    Tarefa.findOneAndUpdate(
      { _id: tarefaId, userId: userId },
      updateObject,
      { new: true },
      function(err, updatedTarefa) {
        if (err) {
          reject(err);
        } else {
          resolve(updatedTarefa);
        }
      }
    );
  });
};

exports.updateIdTarefas = function(req) {
  return new Promise(function(resolve, reject) {
    const tarefaId = req.query.tarefaId;

    const updateObject = {
      título: req.query.título,
      descrição: req.query.descrição,
      dataVencimento: req.query.dataVencimento,
      prioridade: req.query.prioridade,
      estado: req.query.estado,
    };
    Tarefa.findByIdAndUpdate(tarefaId, updateObject, { new: true }, function(err, updatedTarefa) {
      if (err) {
        reject(err);
      } else {
        resolve(updatedTarefa);
      }
    });
  });
};