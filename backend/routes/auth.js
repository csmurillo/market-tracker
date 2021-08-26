const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');
const {signup,signin,isAuth,deleteAccount} = require('../controller/auth');
const { userId } = require('../controller/user');

router.post('/signin',signin);

router.post('/signup',signup);

router.delete('/terminate/account/:userId',verifyToken,isAuth,deleteAccount);

router.param('userId',userId);

module.exports = router;


