const express = require('express');
const router = express.Router();
const {isAuth} = require('../controller/auth');
const verifyToken = require('../middleware/verify-token');
const { watchList, addToWatchList } = require('../controller/watchList');
const { userId } = require('../controller/user');

router.get('/watchlist:userId',verifyToken, isAuth, watchList);
router.put('/add/to/watchlist:userId',verifyToken, isAuth, addToWatchList);

router.param("userId", userId);

module.exports = router;


