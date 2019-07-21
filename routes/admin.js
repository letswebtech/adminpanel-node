const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const userController = require('../controllers/admin/userController');
const loginController = require('../controllers/admin/loginController');

const router = express.Router();

router.get('/login', loginController.getLogin);

router.get('/register', userController.getRegister);

router.get('/dashboard', userController.getDashboard);

module.exports = router;
