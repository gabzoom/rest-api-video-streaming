const { default: mongoose } = require('mongoose');
const Categoria = require('../models/categoriaModel');
const Video = require('../models/videoModel');

exports.getCategoria = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (err) {
        console.log('[ERRO]: ', err);
        res.status(500).send('Falha ao buscar categorias');
    }
};

exports.getCategoriaById = async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = await Categoria.findById(id);
        res.status(200).json(categoria);
    } catch (err) {
        console.log('[ERRO AO BUSCAR]: ', err);
        res.status(500).send('Categoria não encontrada');
    }
};

exports.createCategoria = async (req, res) => {
    try {
        const { titulo, cor } = req.body;
        const categoria = await Categoria.create({
            titulo: titulo,
            cor: cor,
        });
        res.status(201).json(categoria);
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) {
            const campo = Object.keys(err.errors)[0];
            console.log('[CAMPO OBRIGATÓRIO]: ' + err);
            res.status(400).json({ error: `O campo ${campo} é obrigatório!` });
        } else {
            console.log('[FALHA AO CRIAR]: ', err);
            res.status(500).json({ error: 'Falha ao criar nova categoria' });
        }
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true },
        );
        res.status(200).json(categoria);
    } catch (err) {
        console.log('[ERRO AO ATUALIZAR]: ', err);
        res.status(500).send('Falha ao atualizar');
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        const id = req.params.id;
        await Categoria.findByIdAndRemove(id);
        res.status(200).send('Categoria removida com sucesso');
    } catch (err) {
        console.log('[ERRO AO DELETAR]: ', err);
        res.status(500).send('Falha ao remover categoria');
    }
};

exports.getVideosByCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.id;
        const videos = await Video.find({ categoriaId: categoriaId });
        res.status(200).json(videos);
    } catch (err) {
        console.log('[ERRO AO BUSCAR]: ', err);
        res.status(500).send('Categoria não encontrada');
    }
};
