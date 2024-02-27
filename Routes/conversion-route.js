const express = require('express');
const router = express.Router();
const conversionController = require('../Controller/conversion-controller');
router.route('/translation').post(conversionController.getTranslation);
module.exports = router;