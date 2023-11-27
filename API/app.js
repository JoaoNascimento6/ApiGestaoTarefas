const express = require('express');
const app = express();
const fs = require('fs').promises;
const userRoute = require('./routes/userRoute.js')
const autenticacaoMiddleware = require('./middleware/autenticacaoMiddleware');

//Configurações
app.set('port', process.env.PORT || 3000);

app.use(autenticacaoMiddleware);

// Configurar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//Middlewares
app.use(express.json());
//rotas
app.use('/user', userRoute);


// Endpoint para login

app.get('/api/login', async (req, res) => {
  try {
    const rawData = await fs.readFile('user/login/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.status(200).json(dados);  // Use status(200) para indicar sucesso
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de login.');
  }
});

// Endpoint para registro
app.post('/api/registo', async (req, res) => {
  try {
    const rawData = await fs.readFile('user/registo/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.status(201).json(dados);  // Use status(201) para indicar criação bem-sucedida
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de registro.');
  }
});

// Endpoint para atualizar/criar tarefa
app.post('/api/atualizarcriartarefa', async (req, res) => {
  try {
    const rawData = await fs.readFile('Tarefas/criarAtualizarTarefas/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.status(200).json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de atualizar/criar tarefa.');
  }
});

// Endpoint para listar tarefas
app.get('/api/listartarefas', async (req, res) => {
  try {
    const rawData = await fs.readFile('Tarefas/listarTarefas/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.status(200).json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de listar tarefas.');
  }
});

// Endpoint para associar tarefa a usuário
app.post('/api/tarefasUser', async (req, res) => {
  try {
    const rawData = await fs.readFile('Tarefas/tarefasUser/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.status(200).json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de associar tarefa a usuário.');
  }
});

app.listen(port, () => {
  console.log(`Servidor de olhao na porta ${port}`);
});
