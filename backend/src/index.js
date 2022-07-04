require('dotenv').config();
const app = require('./app');

const port = process.env.PORT;

app.get('/', (_req, res) => {
  res.send();
});

app.listen(port, () => console.log(`Escutando na porta ${port}`));
