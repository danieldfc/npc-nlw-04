import express from 'express';

const app = express();

app.get('/users', (reques, response) => {
  return response.json({ mensagem: "Hello World - NLW04" });
});

app.listen(3333, () => console.log('> Server is starting...'));
