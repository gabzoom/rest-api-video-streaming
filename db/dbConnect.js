const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect(process.env.DB_URI_KEY);
        console.log('Conectado ao banco de dados.');
    } catch (err) {
        console.log(`[ERRO]: ${err}`);
    }
}

module.exports = main;
