const express = require('express');
const router = express.Router();
const { isAuth } = require('../controller/auth');
const verifyToken = require('../middleware/verify-token');
const { watchList, addToWatchList,updateWatchList, removeFromWatchList } = require('../controller/watchList');
const { userId } = require('../controller/user');

router.get('/watchlist/:userId',verifyToken, isAuth, watchList);
router.post('/add/to/watchlist/:userId',verifyToken, isAuth, addToWatchList);
router.put('/update/watchlist/:userId',verifyToken, isAuth, updateWatchList);
router.delete('/remove/from/watchlist/:userId',verifyToken, isAuth, removeFromWatchList);

router.param("userId", userId);

module.exports = router;
