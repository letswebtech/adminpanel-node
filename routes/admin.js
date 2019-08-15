const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const userController = require('../controllers/admin/userController');
const loginController = require('../controllers/admin/loginController');

const router = express.Router();

router.get('/', loginController.getLogin);

router.get('/login', loginController.getLogin);

router.post('/login', loginController.postLogin);

router.get('/register', loginController.getRegister);

router.post('/register', loginController.postRegister);

router.get('/dashboard', userController.getDashboard);

/* navigation */
router.get('/navigation', userController.getNavigation)
router.post('/navigation/create', userController.createNavigation)


module.exports = router;
