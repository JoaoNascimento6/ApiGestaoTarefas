'use strict';


/**
 * Criar User
 * Criação de um novo User
 *
 * body User 
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar User
 * Só consegue ser realizado por um User logado
 *
 * email String Email necessário
 * no response value expected for this operation
 **/
exports.userEmailDELETE = function(email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar User
 *
 * email String Necessário enviar o email do User pretendido
 * returns User
 **/
exports.userEmailGET = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "contacto" : 912345678,
  "apelido" : "apelido",
  "nome" : "nome",
  "email" : "email@hotmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updated User
 * So consegue ser realizado por um User logado
 *
 * body User 
 * email String Email do User necessário
 * no response value expected for this operation
 **/
exports.userEmailPATCH = function(body,email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Login do User
 *
 * user String nome do User
 * password String palavra passe do User
 * returns Login
 **/
exports.userLoginGET = function(user,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "email" : "email@hotmail.com~",
  "password" : "password"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logout do User
 *
 * no response value expected for this operation
 **/
exports.userLogoutGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

