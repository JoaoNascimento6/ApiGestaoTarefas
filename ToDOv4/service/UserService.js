// Certifique-se de ajustar o caminho para o modelo User conforme necessário
const User = require('../models/User');

exports.userAtualizarEmail = function(req) {
  return new Promise(function(resolve, reject) {
    const novoEmail = req.query.novoEmail;
    if (!novoEmail) {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer o novo e-mail.' });
      return;
    }

    const emailAntigo = req.query.email;

    if (!emailAntigo) {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer o e-mail antigo.' });
      return;
    }

      User.findOneAndUpdate(
      { email: emailAntigo },
      { email: novoEmail },
      { new: true },
      function(err, user) {
        if (err) {
          reject(err);
        } else {
          if (user) {
            resolve(user);
          } else {
            reject({ message: 'Usuário não encontrado.' });
          }
        }
      }
    );
  });
};

exports.userCreate = function(req) {
  return new Promise(function(resolve, reject) {
    const email = req.query.email;
    const password = req.query.password;
    const nome = req.query.nome;
    const apelido = req.query.apelido;
    const contacto = req.query.contacto;

    if (!email || !password || !nome || !apelido || !contacto) {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer todos os valores obrigatórios.' });
      return;
    }
    const newUser = new User({
      email: email,
      password: password,
      nome: nome,
      apelido: apelido,
      contacto: contacto,
    });
    newUser.save(function(err, savedUser) {
      if (err) {
        reject(err);
      } else {
        resolve(savedUser);
      }
    });
  });
};


exports.userDelete = function(req) {
  return new Promise(function(resolve, reject) {
    const email = req.query.email;
    if (!email) {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer o e-mail.' });
      return;
    }
    User.findOneAndDelete({ email: email }, function(err, deletedUser) {
      if (err) {
        reject(err);
      } else {
        if (deletedUser) {
          resolve({ message: 'Usuário excluído com sucesso.' });
        } else {
          reject({ message: 'Usuário não encontrado para o e-mail fornecido.' });
        }
      }
    });
  });
}

exports.userFindByEmail = function(req) {
  return new Promise(function(resolve, reject) {
    const email = req.query.email;
    if (!email) {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer o e-mail.' });
      return;
    }
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        reject(err);
      } else {
        if (user) {
          resolve(user);
        } else {
          reject({ message: 'Usuário não encontrado para o e-mail fornecido.' });
        }
      }
    });
  });
}

exports.userLogin = function(req) {
  return new Promise(function(resolve, reject) {
    const username = req.query.User;
    const password = req.query.password;
    if (username && password) {
      User.findOne({ username: username, password: password }, function(err, user) {
        if (err) {
          reject(err);
        } else {
          if (user) {
            resolve({ message: 'Login efetuado com sucesso', user: user });
          } else {
            reject({ message: 'Credenciais inválidas' });
          }
        }
      });
    } else {
      reject({ message: 'Parâmetros inválidos. Certifique-se de fornecer todos os valores obrigatórios.' });
    }
  });
}

exports.userLogout = function(req) {
  return new Promise(function(resolve, reject) {
    resolve({ message: 'Logout efetuado com sucesso' });
  });
}