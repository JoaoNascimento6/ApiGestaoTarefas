'use strict';
const User = require('../models/User');


exports.userAtualizarEmail = function(body, email) {
  return User.findOneAndUpdate({ email: email }, { email: body.email }, { new: true })
    .then(updatedUser => {
      if (updatedUser) {
        return updatedUser;
      } else {
        const error = new Error('User não encontrado.');
        error.statusCode = 404;
        throw error;
      }
    })
    .catch(error => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      throw error;
    });
};

exports.userCreate = function(body) {
  const newUser = new User(body);

  return newUser.save()
    .then(createdUser => {
      return createdUser;
    })
    .catch(error => {
      if (error.code === 11000) {
        const duplicateError = new Error('Já existe um usuário com este e-mail.');
        duplicateError.statusCode = 400;
        throw duplicateError;
      } else {
        error.statusCode = 500;
        throw error;
      }
    });
};


exports.userDelete = function(email) {
  return User.findOneAndDelete({ email })
    .then(deletedUser => {
      if (!deletedUser) {
        const notFoundError = new Error('Usuário não encontrado.');
        notFoundError.statusCode = 404;
        throw notFoundError;
      }
      return {
        message: 'Usuário excluído com sucesso.',
        statusCode: 204
      };
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const validationError = new Error('Formato de e-mail inválido.');
        validationError.statusCode = 400;
        throw validationError;
      } else {
        error.statusCode = 500;
        throw error;
      }
    });
};

exports.userFindByEmail = function(email) {
  return User.findOne({ email })
    .then(foundUser => {
      if (!foundUser) {
        const notFoundError = new Error('Usuário não encontrado.');
        notFoundError.statusCode = 404;
        throw notFoundError;
      }
      return foundUser.toObject(); 
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const validationError = new Error('Formato de e-mail inválido.');
        validationError.statusCode = 400;
        throw validationError;
      } else {
        error.statusCode = 500;
        throw error;
      }
    });
};



exports.userLogin = function(user, password) {
  return User.findOne({ email: user, password: password })
    .then(foundUser => {
      if (!foundUser) {
        const unauthorizedError = new Error('Credenciais inválidas.');
        unauthorizedError.statusCode = 400;
        throw unauthorizedError;
      }
      return { email: foundUser.email, password: foundUser.password };
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const validationError = new Error('Formato de e-mail ou senha inválido.');
        validationError.statusCode = 400;
        throw validationError;
      } else {
        error.statusCode = 500;
        throw error;
      }
    });
};

exports.userLogout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

