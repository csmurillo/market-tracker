const express = require('express');
const { userId, getUserInformation, accountUpdate, changePassword,addToStockHistory, stockHistory, dowjones, stockSearch, stock, stockPrice, stockNews, stockGainers, stockLosers } = require('../controller/user');
const { isAuth } = require('../controller/auth');
const verifyToken = require('../middleware/verify-token');
const { userChangePasswordValidator,updateProfileInformationValidator } = require('../validators');

const router = express.Router();

router.get('/user/account/:userId',verifyToken,isAuth,getUserInformation);

router.put('/user/account/update/:userId',verifyToken,updateProfileInformationValidator, isAuth, accountUpdate);

router.put('/user/account/passwordChange/:userId',verifyToken,userChangePasswordValidator,isAuth,changePassword);

router.put('/add/to/stock/history/:userId',verifyToken, isAuth, addToStockHistory);

router.get('/stock/history/:userId',verifyToken, isAuth, stockHistory);

router.get('/stock/dowjones',dowjones);

router.get('/stock/search',stockSearch);

router.get('/stock',stock);

router.get('/stock/price',stockPrice);

router.get('/stock/news', stockNews);

router.get('/stock/gainers',stockGainers);

router.get('/stock/losers',stockLosers);

router.param("userId", userId);

module.exports = router;