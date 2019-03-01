const { Router } = require('express');
const objectsController = require('../controllers/objects.controller.js');
const router = Router();

router.get('/', objectsController.getListObjects);
 
module.exports = router;