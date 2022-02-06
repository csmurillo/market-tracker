const express = require('express');
const { userId,stockSymbol, getUserInformation, accountUpdate, getEnableAlerts, updateEnableAlerts,
     changePassword, addToStockHistory, stockHistory, dowjones, stockSearch, stock, stockPrice, stockNews, stockMovement,
     stockWeekMovement,stockMonthMovement,stockYearMovement,stockFiveYearMovement,
     stockOnWatchList,stockGainers, stockLosers } = require('../controller/user');
const { isAuth } = require('../controller/auth');
const verifyToken = require('../middleware/verify-token');
const { userChangePasswordValidator,updateProfileInformationValidator } = require('../validators');

const router = express.Router();

router.get('/user/account/:userId',verifyToken,isAuth,getUserInformation);

router.put('/user/account/update/:userId',verifyToken,updateProfileInformationValidator, isAuth, accountUpdate);

router.get('/user/account/enableAlerts/:userId',verifyToken,isAuth,getEnableAlerts);

router.put('/user/account/enableAlerts/update/:userId',verifyToken,isAuth,updateEnableAlerts);

router.put('/user/account/passwordChange/:userId',verifyToken,userChangePasswordValidator,isAuth,changePassword);

router.put('/add/to/stock/history/:userId',verifyToken, isAuth, addToStockHistory);

router.get('/stock/history/:userId',verifyToken, isAuth, stockHistory);

router.get('/stock/dowjones',dowjones);

router.get('/stock/search',stockSearch);

router.get('/stock/:stockSymbol',stock);

router.get('/stock/price/:stockSymbol',stockPrice);

router.get('/stock/news/:stockSymbol', stockNews);

router.get('/stock/day/movement/:stockSymbol', stockMovement);

router.get('/stock/week/movement/:stockSymbol', stockWeekMovement);

router.get('/stock/month/movement/:stockSymbol', stockMonthMovement);

router.get('/stock/year/movement/:stockSymbol', stockYearMovement);

router.get('/stock/fiveYear/movement/:stockSymbol', stockFiveYearMovement);

router.get('/stock/on/watchlist/:stockSymbol/:userId',verifyToken,isAuth, stockOnWatchList);

router.get('/stock/gainers',stockGainers);

router.get('/stock/losers',stockLosers);

router.param("userId", userId);
router.param("stockSymbol", stockSymbol);

module.exports = router;