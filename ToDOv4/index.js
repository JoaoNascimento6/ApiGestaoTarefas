'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:12345@apitodo.twkieed.mongodb.net/?retryWrites=true&w=majority";

var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();


http.createServer(app).listen(serverPort, function () {

  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});

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