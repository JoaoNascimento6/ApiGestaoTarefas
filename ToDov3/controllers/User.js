'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userAtualizarEmail = function userAtualizarEmail (req, res, next, body, email) {
  User.userAtualizarEmail(body, email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userCreate = function userCreate (req, res, next, body) {
  User.userCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userDelete = function userDelete (req, res, next, email) {
  User.userDelete(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userFindByEmail = function userFindByEmail (req, res, next, email) {
  User.userFindByEmail(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogin = function userLogin (req, res, next, user, password) {
  User.userLogin(user, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogout = function userLogout (req, res, next) {
  User.userLogout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
