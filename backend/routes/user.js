const express = require('express');
const { userId,stockId, accountUpdate, changePassword, stockHistory, dowjones, stockSearch, stock, stockNews } = require('../controller/user');
const {isAuth} = require('../controller/auth');
const verifyToken = require('../middleware/verify-token');

const router = express.Router();

router.put('/user/account/update:userId',verifyToken, isAuth, accountUpdate);

router.put('/user/account/passwordChange:userId',verifyToken, isAuth,changePassword);

router.get('/stock/history:userId',verifyToken, isAuth, stockHistory);

router.get('/stock/dowjones',dowjones);

router.get('/stock/search:userId',verifyToken, isAuth,stockSearch);

router.get('/stock',stock);

router.get('/stock/news', stockNews);

router.param("userId", userId);

module.exports = router;





