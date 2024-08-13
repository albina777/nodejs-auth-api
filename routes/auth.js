const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Ensure this path is correct

router.post('/login', authController.login);  // Ensure authController.login is defined

module.exports = router;  // Ensure you are exporting the router instance
