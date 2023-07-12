const mongoose = require('mongoose');
const Categoria = require('./categoriaModel');
const { Schema } = mongoose;

const videoSchema = new Schema(
    {
        categoriaId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Categoria,
            required: true,
            default: process.env.CAT_GERAL_KEY,
        },
        titulo: { type: String, required: true },
        descricao: { type: String, required: true },
        url: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
