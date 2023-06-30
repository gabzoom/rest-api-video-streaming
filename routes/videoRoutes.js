const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/', videoController.getVideo);
router.get('/:id', videoController.getVideoById);
router.post('/', videoController.createVideo);
router.put('/:id', videoController.updateVideo);

module.exports = router;
