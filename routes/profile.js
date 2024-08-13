const express = require('express');
const router = express.Router();
const passport = require('passport');
const profileController = require('../controllers/profileController');

router.get('/profile', passport.authenticate('jwt', { session: false }), profileController.getProfile);

module.exports = router;  // Ensure you are exporting the router instance
