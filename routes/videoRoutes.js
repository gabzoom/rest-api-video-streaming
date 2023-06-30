const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Rota para listar todos os vídeos
router.get('/', videoController.getVideo);
// Rota para obter um vídeo por id
router.get('/:id', videoController.getVideoById);
// Rota para criar um novo vídeo
router.post('/', videoController.createVideo);

module.exports = router;
