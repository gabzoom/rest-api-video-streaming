const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriaSchema = new Schema(
    {
        id: { type: String },
        titulo: { type: String, require: true },
        cor: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
