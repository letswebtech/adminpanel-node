const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const isAuth = require('../middleware/authMiddleware').isAuth;
const userController = require('../controllers/admin/userController');
const loginController = require('../controllers/admin/loginController');
const router = express.Router();

//UserAuth Routes
router.get('/admin/', loginController.getLogin);
router.get('/admin/login', loginController.getLogin);
router.post('/admin/login', loginController.postLogin);
router.get('/admin/register', loginController.getRegister);
router.post('/admin/register', loginController.postRegister);
router.get('/admin/logout', loginController.logout);

/* admin routes*/
router.get('/admin/dashboard', isAuth, userController.getDashboard);
router.get('/admin/profile/update', isAuth, userController.getProfileUpdate);
router.post('/admin/profile/update', isAuth, userController.postProfileUpdate);
/* navigation */
router.get('/admin/navigation', isAuth, userController.getNavigation)
router.post('/admin/navigation/create', isAuth, upload.none(), userController.createNavigation)

module.exports = router;
