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
        res.status(500).json(categoria);
    } catch (err) {
        console.log('[ERRO]: ', err);
        res.status(500).send('Falha ao buscar a categoria');
    }
};
