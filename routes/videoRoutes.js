const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Rota para listar todos os vídeos
router.get('/', videoController.getVideo);

module.exports = router;
