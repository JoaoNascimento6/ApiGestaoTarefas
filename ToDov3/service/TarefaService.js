'use strict';
const Tarefa = require('../models/Tarefa');

exports.criarTarefas = function (body) {
  return new Promise(function (resolve, reject) {
    const novaTarefa = new Tarefa({
      tarefaId: body.tarefaId,
      userId: body.userId,
      título: body.título,
      descrição: body.descrição,
      dataVencimento: new Date(body.dataVencimento),
      prioridade: body.prioridade,
      estado: body.estado,
    });

    novaTarefa.save()
      .then((tarefa) => {
        resolve({ status: 201, message: 'Tarefa criada com sucesso.', tarefa: tarefa });
      })
      .catch((error) => {
        const errorMessage = error.message || 'Erro interno do servidor.';
        const statusCode = error.name === 'ValidationError' ? 400 : 500;
        reject({ status: statusCode, message: errorMessage, error: error });
      });
  });
};

exports.deleteTarefas = function (req, res, next, tarefaId) {
  Tarefa.deleteTarefas(tarefaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


exports.listarDataTarefas = async function (userId, dataVencimento) {
  try {
    const response = await Tarefa.find({ userId: userId, dataVencimento: dataVencimento });
    
    if (response.length > 0) {
      return {
        status: 200,
        message: "Resposta bem-sucedida. Lista de tarefas agrupadas por data de vencimento.",
        data: response
      };
    } else {
      return {
        status: 204,
        message: "O ID fornecido não tem tarefas associadas nesta data."
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Erro interno do servidor.",
      error: error.message
    };
  }
};

exports.listarTodasTarefas = async function (userId) {
  try {
    const response = await Tarefa.find({ userId: userId });

    if (response.length > 0) {
      return {
        status: 200,
        message: "Resposta bem-sucedida. Lista de todas as tarefas deste usuário.",
        data: response
      };
    } else {
      return {
        status: 204,
        message: "O ID fornecido não tem tarefas associadas."
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Erro interno do servidor.",
      error: error.message
    };
  }
};

exports.listarIdTarefas = function (tarefaId) {
  return Tarefa.findOne({ tarefaId: tarefaId })
    .then((tarefa) => {
      if (!tarefa) {
        return Promise.reject({ status: 404, message: 'Tarefa não encontrada.' });
      }
      return {
        status: 200,
        message: 'Resposta bem-sucedida. Informações detalhadas sobre a tarefa.',
        data: tarefa
      };
    })
    .catch((error) => {
      return Promise.reject({ status: 500, message: 'Erro interno do servidor.' });
    });
};

exports.listarPrioridadeTarefas = async function (userId, prioridade) {
  try {
    const response = await Tarefa.find({ userId: userId, prioridade: prioridade });

    if (response.length > 0) {
      return {
        status: 200,
        message: "Resposta bem-sucedida. Lista de tarefas com a prioridade informada.",
        data: response
      };
    } else {
      return {
        status: 204,
        message: "O ID fornecido não tem tarefas com esta prioridade."
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Erro interno do servidor.",
      error: error.message
    };
  }
};


exports.listarTodasTarefas = async function (userId) {
  try {
    const tarefas = await Tarefa.find({ userId: userId });

    if (tarefas.length > 0) {
      return {
        status: 200,
        message: "Resposta bem-sucedida. Lista de todas as tarefas deste usuário.",
        data: tarefas
      };
    } else {
      return {
        status: 204,
        message: "O ID fornecido não tem tarefas associadas.",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Erro interno do servidor.",
      error: error.message
    };
  }
};



exports.updateEstadoTarefas = async function (body, userId, estado) {
  try {
    const response = await Tarefa.updateOne({ userId: userId, estado: estado }, { $set: body });

    if (response.nModified > 0) {
      return {
        status: 200,
        message: "Tarefa atualizada com sucesso."
      };
    } else {
      return {
        status: 404,
        message: "Tarefa não encontrada."
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Erro interno do servidor.",
      error: error.message
    };
  }
};


exports.updateIdTarefas = function (body, tarefaId) {
  return new Promise(function (resolve, reject) {
    Tarefa.updateOne({ tarefaId: tarefaId }, { $set: body })
      .then((result) => {
        if (result.nModified > 0) {
          // Tarefa atualizada com sucesso
          resolve({ message: 'Tarefa atualizada com sucesso.' });
        } else {
          // Tarefa não encontrada
          reject({ status: 404, message: 'Tarefa não encontrada.' });
        }
      })
      .catch((error) => {
        // Erro interno do servidor
        reject({ status: 500, message: 'Erro interno do servidor.', error: error });
      });
  });
};
