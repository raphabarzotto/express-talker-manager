const express = require('express');
const bodyParser = require('body-parser');

const routerTalker = require('./routers/routerTalker');
const routerLogin = require('./routers/routerLogin');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', routerTalker);
app.use('/login', routerLogin);

app.listen(PORT, () => {
  console.log(`Online in PORT: ${PORT}`);
});
