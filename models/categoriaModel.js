const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriaSchema = new Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        cor: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
