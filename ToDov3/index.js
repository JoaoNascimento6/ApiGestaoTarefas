'use strict';

const path = require('path');
const http = require('http');

var oas3Tools = require('oas3-tools');

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:12345@apitodo.twkieed.mongodb.net/?retryWrites=true&w=majority";

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(path.join(__dirname, 'api/openapi.yaml'));



const PORT = process.env.PORT || 8080;

var options = {
  routing: {
      controllers: path.join(__dirname, './controllers')
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

http.createServer(app).listen(PORT, () => {
  console.log(`Seu servidor está ouvindo na porta ${PORT} (http://localhost:${PORT})`);
  console.log(`Swagger-ui está disponível em http://localhost:${PORT}/api-docs`);
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
