'use strict';

var path = require('path');
var http = require('http');
var express = require('express');
var jwt = require('express-jwt');
var jwksRsa = require('jwks-rsa');
const { auth } = require('express-openid-connect');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:12345@apitodo.twkieed.mongodb.net/?retryWrites=true&w=majority";
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, 'api/openapi.yaml'));

var serverPort = 8080;

// Configuração do Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'BTMeYaUCHgv0tw6Tr9UO2bmrPv9LTpAYZK34iOBRlYeNzRwPXI_Ufa8UdFrZvLM1',
  baseURL: 'http://localhost:8080',
  clientID: '55iZS7n1jGhAuu55pliaR3WodlIDw2EE',
  issuerBaseURL: 'https://dev-t2451ya5jqel67p5.us.auth0.com',
};

// Crie o app Express
var app = express();

// Use session para armazenar dados de sessão
app.use(session({
  secret: '55iZS7n1jGhAuu55pliaR3WodlIDw2EE',
  resave: true,
  saveUninitialized: false,
}));

// Use o middleware Auth0
app.use(auth(config));

// Middleware para desativar autenticação em ambiente de desenvolvimento
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    // Desativar autenticação em ambiente de desenvolvimento
    return next();
  }

  if (req.oidc.isAuthenticated()) {
    return next();
  }
  res.send('Unauthorized');
});


// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicializar o servidor HTTP
http.createServer(app).listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('Swagger-ui is available on http://localhost:%d/api-docs', serverPort);
});

// Conectar ao MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(() => {
    console.log('error connecting to MongoDB');
  });

// Conectar ao MongoDB usando MongoClient
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
