const express = require('express');
const app = express();
require('dotenv').config();
const videoRouter = require('./routes/videoRoutes');
const dbConnect = require('./db/dbConnect');
dbConnect();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define o prefixo '/videos' para todas as rotas do videoRouter
app.use('/videos', videoRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
