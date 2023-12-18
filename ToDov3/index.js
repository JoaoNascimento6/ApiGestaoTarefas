'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const { auth } = require('express-openid-connect');
require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:12345@apitodo.twkieed.mongodb.net/?retryWrites=true&w=majority";
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(path.join(__dirname, 'api/openapi.yaml'));

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'BTMeYaUCHgv0tw6Tr9UO2bmrPv9LTpAYZK34iOBRlYeNzRwPXI_Ufa8UdFrZvLM1',
  baseURL: 'http://localhost:8080',
  clientID: '55iZS7n1jGhAuu55pliaR3WodlIDw2EE',
  issuerBaseURL: 'https://dev-t2451ya5jqel67p5.us.auth0.com',
  routes: {
    login: false,
    callback: '/callback',
    postLogoutRedirect: '/logout',
  },
};

const app = express();

app.get('/callback', async (req, res, next) => {
  const { oidc } = req;

  try {
    await oidc.authenticate({
      successRedirect: '/rota-apos-login',
      failureRedirect: '/',
    })(req, res, next);
  } catch (err) {
    next(err);
  }
});

app.get('/rota-apos-login', (req, res) => {
  res.send('Você está logado!');
});

const PORT = process.env.PORT || 8080;

http.createServer(app).listen(PORT, () => {
  console.log(`Seu servidor está ouvindo na porta ${PORT} (http://localhost:${PORT})`);
  console.log(`Swagger-ui está disponível em http://localhost:${PORT}/api-docs`);
});

app.use(session({
  secret: '55iZS7n1jGhAuu55pliaR3WodlIDw2EE',
  resave: true,
  saveUninitialized: false,
}));

app.use(auth(config));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'development' || req.oidc.isAuthenticated()) {
    return next();
  }
  res.send('Unauthorized');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Error connecting to MongoDB'));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
