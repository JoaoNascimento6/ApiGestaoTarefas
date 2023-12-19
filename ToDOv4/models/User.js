const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  apelido: {
    type: String,
  },
  email: {
    type: String,
    match: /^[^@\t\r\n]+@[^@\t\r\n]+[^@\t\r\n]+$/,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacto: {
    type: String,
    match: /^9[0-9]{2}[0-9]{3}[0-9]{3}$/,
  },
  userId: {
    type: String,
    match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
