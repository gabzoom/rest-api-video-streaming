const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.getCategoria);
router.get('/id:'), categoriaController.getCategoriaById;
// router.post('/', categoriaController.createCategoria);

module.exports = router;
