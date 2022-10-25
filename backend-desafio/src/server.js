const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3304;

app.listen(PORT, () => console.log(`API Desafio Grupo A running or port ${PORT}`));