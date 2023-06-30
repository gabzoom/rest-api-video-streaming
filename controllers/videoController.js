const Video = require('../models/videoModel');

exports.getVideo = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (err) {
        console.log('[ERRO NA BUSCA]: ', err);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os videos' });
    }
};

exports.getVideoById = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findById(id);
        res.status(200).json(video);
    } catch (err) {
        console.log('[ERRO NA BUSCA]: ' + err);
        res.status(500).send('Não encontrado');
    }
};

exports.createVideo = async (req, res) => {
    try {
        let video = await new Video(req.body);
        await video.save();
        res.status(201).json(video);
    } catch (err) {
        console.log('[ERRO NA CRIAÇÃO]: ' + err);
        res.status(500).send('Erro ao tentar criar o vídeo');
    }
};

exports.updateVideo = async (req, res) => {
    const id = req.params.id;
    try {
        const video = await Video.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true },
        );
        res.status(200).json(video);
    } catch (err) {
        console.log('[ERRO AO ATUALIZAR]: ' + err);
        res.status(500).send('Erro ao tentar atualizar o vídeo');
    }
};
