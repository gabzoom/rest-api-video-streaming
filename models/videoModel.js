const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema(
    {
        id: { type: String },
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
