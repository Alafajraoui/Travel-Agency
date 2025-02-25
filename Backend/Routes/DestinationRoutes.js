const express = require('express');
const router = express.Router();
const { getAllDestinations, getDestinationById } = require('../Controllers/DestinationController');

router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);

module.exports = router;