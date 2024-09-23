const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.getHomeData);
router.post('/submit', homeController.postData);

module.exports = router;