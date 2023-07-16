const Video = require('../models/videoModel');

exports.getVideo = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (err) {
        console.log('[ERRO AO BUSCAR]: ', err);
        res.status(500).json({ error: 'Falha ao buscar os videos' });
    }
};

exports.getVideoById = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findById(id);
        res.status(200).json(video);
    } catch (err) {
        console.log('[ERRO AO BUSCAR]: ' + err);
        res.status(500).send('Vídeo não encontrado');
    }
};

exports.getVideoByName = async (req, res) => {
    const titulo = req.query.titulo;

    try {
        const video = await Video.find({ titulo: titulo });
        res.status(200).json(video);
    } catch (err) {
        console.log('[ERRO AO BUSCAR]: ' + err);
        res.status(500).send('Vídeo não encontrado');
    }
};

exports.createVideo = async (req, res) => {
    try {
        let video = await new Video(req.body);
        await video.save();
        res.status(201).json(video);
    } catch (err) {
        console.log('[ERRO AO CRIAR]: ' + err);
        res.status(500).json({ error: 'Falha ao criar novo vídeo' });
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
        res.status(500).send('Falha ao atualizar vídeo');
    }
};

exports.deleteVideo = async (req, res) => {
    const { id } = req.params;
    try {
        await Video.findByIdAndRemove(id);
        res.status(200).send('Vídeo removido com sucesso!');
    } catch (err) {
        console.log('[ERRO AO DELETAR]: ', err);
        res.status(500).send('Falha ao remover vídeo');
    }
};
