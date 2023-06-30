const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const dbConnect = require('./db/dbConnect');
dbConnect();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
