const Video = require('../models/videoModel');

// Lista todos os vídeos
exports.getVideo = async (req, res) => {
    try {
        const data = await Video.find();
        res.status(200).json(data);
    } catch (err) {
        console.log('[ERRO NA BUSCA]: ', err);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os livros' });
    }
};
