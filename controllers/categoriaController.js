const Categoria = require('../models/categoriaModel');

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
        console.log('[ERRO AO CRIAR]: ', err);
        res.status(500).json({ error: 'Falha ao criar nova categoria' });
    }
};
