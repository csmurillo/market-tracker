const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');
const { signup, signin, isAuth, deleteAccount, verifyPassword } = require('../controller/auth');
const { userId } = require('../controller/user');
const { signupValidator,signinValidator } = require('../validators');

router.post('/signin', signinValidator, signin);

router.post('/signup', signupValidator, signup);

router.delete('/terminate/account/:userId', verifyToken, verifyPassword, isAuth, deleteAccount);

router.param('userId',userId);

module.exports = router;