import 'reflect-metadata';

import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
  return response.json({ mensagem: "Hello World - NLW04" });
});

app.post('/', (request, response) => {
  return response.json({ mensagem: "Dados salvos com sucesso" });
})

app.listen(3333, () => console.log('> Server is starting...'));
