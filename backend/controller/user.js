const User = require('../models/user');
const { Stock } = require('../models/watchList');
const fetch = require('node-fetch');
const bcrypt = require("bcrypt");

exports.userId = (req,res,next,id)=>{
    User.findById(id)
        .exec((err,user)=>{
            if(err||!user){
                return res.status(401).json({
                    message:"User does not exist"
                });
            }
            req.user = user;
            next();
        });
};

exports.accountUpdate = (req,res)=>{
    const {userId}=req.userTokenData;
    const { firstName, lastName, email, smsAlerts } = req.body;

    const accountFieldsNotFilled= (firstName==undefined)||(lastName==undefined)||(email==undefined)||(smsAlerts==undefined);
    if(accountFieldsNotFilled){
        return res.json({
            message:"Please fill in all fields"
        });
    }

    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.smsAlerts=true;
        user.save((err,updatedUser)=>{
            if(err){
                return res.status(401).json({
                    error:"Error: User could not be updated"
                });
            }
            updatedUser.password=undefined;
            res.json(updatedUser);
        });
    });
};

exports.changePassword = (req,res)=>{
    const {userId}=req.userTokenData;
    const { password } = req.body;

    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    message:"User does not exist"
            });
        }
        bcrypt.hash(password, 10, function(err, hashPassword) {
            if(err){
                return res.status(401).json({
                        message:"Please provide a password"
                });
            }
            user.password=hashPassword;
            user.save((err,updatedUser)=>{
                updatedUser.password=undefined;
                res.json(updatedUser);
            });
        });
    });
};

// must be tested 
exports.addToStockHistory = (req,res)=>{
    const {userId}=req.userTokenData;
    console.log(userId);
    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    message:err
            });
        }
        console.log(req.body.symbol+'.'+req.body.priceAlert);
        const stock=new Stock({
            tickerSymbol:req.body.symbol,
            alertPrice:req.body.priceAlert
        });
        user.stockHistory.push(stock);
        user.save((err,updatedUser)=>{
            res.json(updatedUser);
        });
    });
};

exports.stockHistory = (req,res)=>{
    const {userId}=req.userTokenData;

    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            res.status(400).json({
                error:err
            });
        }
        res.json({stocks:user.stockHistory});
    });
};

exports.dowjones = async (req,res)=>{
    const twelveDowjones = `https://api.twelvedata.com/time_series?symbol=DJI&interval=5min&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const twelveData = await fetch(twelveDowjones);
    const twelveDowjonesData = await twelveData.json();
    res.json({dowjones:twelveDowjonesData});
};

exports.stockSearch = async (req,res)=>{
    const stockSymbol = req.query.symbol;
    const twelveSearchStock = `https://api.twelvedata.com/symbol_search?symbol=${stockSymbol}&source=docs`;
    const twelveSearchRes=await fetch(twelveSearchStock);
    const twelveStockSearchData=await twelveSearchRes.json();
    res.json({searchResult:twelveStockSearchData});
};

// url: /stock?symbol={stockSymbol}
exports.stock = async (req,res)=>{
    const stockSymbol = req.query.symbol;
    const finnhub=`https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const finnhubRes=await fetch(finnhub);
    const finnData=await finnhubRes.json();

    const twelvedata=`https://api.twelvedata.com/quote?symbol=${stockSymbol}&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const twelveRes = await fetch(twelvedata);
    const twelveData = await twelveRes.json();
    const stockData = {
        marketCap:finnData.marketCapitalization,
        volume:twelveData.volume,
        averageVolume:twelveData.average_volume,
        fiftytwoWeekHigh:twelveData.high,
        fiftytwoWeekLow:twelveData.low,
        openPrice:twelveData.open
    };
    res.json({stockFinancialData:stockData});
};

// url: /stock/price?symbol={stockSymbol}
exports.stockPrice=async (req,res)=>{
    const stockSymbol = req.query.symbol;
    const finnhub=`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const finnhubRes=await fetch(finnhub);
    const finnStockPriceData=await finnhubRes.json();
    res.json({
        stock:stockSymbol,
        currentPrice:finnStockPriceData.c,
        dollarPriceChange:finnStockPriceData.d,
        percentPriceChange:finnStockPriceData.dp
    });
};

// url: /stock/news?symbol={stockSymbol}
exports.stockNews = async (req,res)=>{
    const stockSymbol = req.query.symbol;
    // const {stockSymbol} = req.stockSymbol;
    const newapi = `https://newsapi.org/v2/everything?q=${stockSymbol}&from=2021-08-10&sortBy=publishedAt&apiKey=${process.env.STOCK_NEWS_API_KEY}`;
    const newsRes = await fetch(newapi);
    const newsData = await newsRes.json();
    res.json({news:newsData});
};

exports.stockGainers = async(req,res)=>{
    const sfmkapi = `https://financialmodelingprep.com/api/v3/stock/gainers?apikey=${process.env.STOCK_FINANCIAL_MODEL_KEY}`;
    const sfmkRes = await fetch(sfmkapi);
    const sfmkData = await sfmkRes.json();
    res.json({gainers:sfmkData});
};

exports.stockLosers = async(req,res)=>{
    const sfmkapi = `https://financialmodelingprep.com/api/v3/stock/losers?apikey=${process.env.STOCK_FINANCIAL_MODEL_KEY}`;
    const sfmkRes = await fetch(sfmkapi);
    const sfmkData = await sfmkRes.json();
    res.json({gainers:sfmkData});
};



