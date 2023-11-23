const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Token de autenticação não fornecido');
  }

  jwt.verify(token, 'segredo', (err, decoded) => {
    if (err) {
      return res.status(401).send('Token de autenticação inválido');
    }

    req.usuario = decoded.usuario;
    next();
  });
};

module.exports = verificarToken;
