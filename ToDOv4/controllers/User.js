'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userAtualizarEmail = function userAtualizarEmail(req, res, next, body) {
  const novoEmail = req.query.novoEmail;
  const emailAntigo = req.query.email;

  User.userAtualizarEmail(body, emailAntigo, novoEmail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.userCreate = function userCreate(req, res, next, body) {
  User.userCreate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userDelete = function userDelete (req, res, next) {
  const email = req.query.email;
  User.userDelete(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userFindByEmail = function userFindByEmail (req, res, next) {
  const email = req.query.email;
  User.userFindByEmail(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.userLogin = function userLogin (req, res, next) {
  const user = req.query.email;
  const password = req.query.email;
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
