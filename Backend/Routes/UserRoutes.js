const express = require('express');
const router = express.Router();
const { updateUserProfile } = require('../Controllers/UserController');

router.put('/:id/profile', updateUserProfile);

module.exports = router;