const { Router } = require('express');
const multer = require('../config/multer');
const filesController = require('../controllers/files.controller.js');
const router = Router();

router.post('/upload', multer.single("file"), filesController.doUpload);
 
module.exports = router;