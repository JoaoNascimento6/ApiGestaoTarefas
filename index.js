const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para login
app.get('/login', async (req, res) => {
  try {
    const rawData = await fs.readFile('user/login/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de login.');
  }
});

// Endpoint para registro
app.post('/registo', async (req, res) => {
  try {
    const rawData = await fs.readFile('user/registo/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de registro.');
  }
});

// Endpoint para atualizar/criar tarefa
app.post('/atualizarcriartarefa', async (req, res) => {
  try {
    const rawData = await fs.readFile('Tarefas/criarAtualizarTarefas/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de atualizar/criar tarefa.');
  }
});

// Endpoint para listar tarefas
app.get('/listartarefas', async (req, res) => {
  try {
    const rawData = await fs.readFile('Tarefas/listarTarefas/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de listar tarefas.');
  }
});

// Endpoint para associar tarefa a usuário
app.post('/tarefasUser', async (req, res) => {
  try {
    const rawData = await fs.readFile('Tarefas/tarefasUser/index.json', 'utf8');
    const dados = JSON.parse(rawData);
    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de associar tarefa a usuário.');
  }
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
