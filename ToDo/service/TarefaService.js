'use strict';


/**
 * Lista todas as tarefas por prioridade
 *
 * userId UUID 
 * dataVencimento date 
 * returns listaDeTarefasDataVencimento
 **/
exports.listartarefasUserIdDataVencimentoGET = function(userId,dataVencimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tarefas" : [ {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  }, {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  } ],
  "dataVencimento" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas as tarefas por prioridade
 *
 * userId UUID 
 * estado String 
 * returns listaDeTarefasEstado
 **/
exports.listartarefasUserIdEstadoGET = function(userId,estado) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estado" : "concluido",
  "tarefas" : [ {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  }, {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar o estado de uma tarefa
 * Atualiza o estado de uma tarefa com base no ID do usuário e no estado fornecido.
 *
 * body UserId_Estado_body Objeto contendo as atualizações do estado da tarefa
 * userId UUID 
 * estado String 
 * returns listaDeTarefasEstado
 **/
exports.listartarefasUserIdEstadoPATCH = function(body,userId,estado) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estado" : "concluido",
  "tarefas" : [ {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  }, {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas as tarefas do user logado.
 *
 * userId UUID 
 * returns listaDeTarefas
 **/
exports.listartarefasUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
  "userId" : "550e8400-e29b-41d4-a716-446655440077",
  "título" : "Concluir Relatório Mensal",
  "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 15,
  "estado" : "concluido"
}, {
  "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
  "userId" : "550e8400-e29b-41d4-a716-446655440077",
  "título" : "Concluir Relatório Mensal",
  "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 15,
  "estado" : "concluido"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas as tarefas por prioridade
 *
 * userId UUID 
 * prioridade Integer 
 * returns listaDeTarefasPorPrioridade
 **/
exports.listartarefasUserIdPrioridadeGET = function(userId,prioridade) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "prioridade" : 1,
  "tarefas" : [ {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  }, {
    "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
    "userId" : "550e8400-e29b-41d4-a716-446655440077",
    "título" : "Concluir Relatório Mensal",
    "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
    "dataVencimento" : "2023-11-30T00:00:00.000Z",
    "prioridade" : 15,
    "estado" : "concluido"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ver todas as tarefas ordenadas e agrupadas por mês
 * Endpoint para listar todas as tarefas do usuário ordenadas e agrupadas por mês
 *
 * userId UUID 
 * returns List
 **/
exports.listartodasUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tarefas" : [ {
    "estado" : "concluido",
    "título" : "título",
    "tarefaId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "estado" : "concluido",
    "título" : "título",
    "tarefaId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  } ],
  "dataVencimento" : "2000-01-23"
}, {
  "tarefas" : [ {
    "estado" : "concluido",
    "título" : "título",
    "tarefaId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "estado" : "concluido",
    "título" : "título",
    "tarefaId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  } ],
  "dataVencimento" : "2000-01-23"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Criar uma nova tarefa
 * Endpoint para criar uma nova tarefa.
 *
 * body Tarefa 
 * returns tarefa
 **/
exports.tarefaPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
  "userId" : "550e8400-e29b-41d4-a716-446655440077",
  "título" : "Concluir Relatório Mensal",
  "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 15,
  "estado" : "concluido"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Excluir uma tarefa existente
 * Excluir uma tarefa existente apartir do ID.
 *
 * tarefaId tarefaId 
 * no response value expected for this operation
 **/
exports.tarefasTarefaIdDELETE = function(tarefaId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter informações sobre uma tarefa
 * Obter informações detalhadas sobre uma tarefa apartir do ID.
 *
 * tarefaId tarefaId ID da tarefa que será atualizada
 * returns tarefa
 **/
exports.tarefasTarefaIdGET = function(tarefaId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
  "userId" : "550e8400-e29b-41d4-a716-446655440077",
  "título" : "Concluir Relatório Mensal",
  "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 15,
  "estado" : "concluido"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar uma tarefa existente
 * Endpoint para atualizar uma tarefa existente.
 *
 * body Tarefa 
 * tarefaId UUID 
 * returns tarefa
 **/
exports.tarefasTarefaIdPUT = function(body,tarefaId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tarefaId" : "550e8400-e29b-41d4-a716-446655440044",
  "userId" : "550e8400-e29b-41d4-a716-446655440077",
  "título" : "Concluir Relatório Mensal",
  "descrição" : "Escrever um relatório sobre o desempenho mensal da equipe",
  "dataVencimento" : "2023-11-30T00:00:00.000Z",
  "prioridade" : 15,
  "estado" : "concluido"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

