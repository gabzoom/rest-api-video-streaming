const express = require('express');
const app = express();
require('dotenv').config();
const videoRouter = require('./routes/videoRoutes');
const categoriaRouter = require('./routes/categoriaRoutes');
const dbConnect = require('./db/dbConnect');
dbConnect();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define o prefixo '/videos' para todas as rotas do videoRouter
app.use('/videos', videoRouter);
// Define o prefixo '/videos' para todas as rotas do videoRouter
app.use('/categorias', categoriaRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
