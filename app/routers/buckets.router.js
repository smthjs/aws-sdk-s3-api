const { Router } = require('express');
const bucketsController = require('../controllers/buckets.controller.js');
const router = Router();

router.get('/', bucketsController.getListBuckets);
 
module.exports = router;