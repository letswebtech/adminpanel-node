const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const path = require('path');
const rootDir = require('../util/path');
const userController = require('../controllers/admin/userController');
const loginController = require('../controllers/admin/loginController');

const router = express.Router();

const authMiddleware = (req, res, next) => {
    console.log(req.session.user);
    next();
}

router.get('/', loginController.getLogin);

router.get('/login', loginController.getLogin);

router.post('/login', loginController.postLogin);

router.get('/register', loginController.getRegister);

router.post('/register', loginController.postRegister);

router.get('/dashboard', userController.getDashboard);

/* navigation */
router.get('/navigation', authMiddleware, userController.getNavigation)
router.post('/navigation/create', authMiddleware, upload.none(), userController.createNavigation)


module.exports = router;
