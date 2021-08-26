const User = require('../models/user');
const fetch = require('node-fetch');
const bcrypt = require("bcrypt");

exports.userId = (req,res,next,id)=>{
    User.findById(id)
        .exec((err,user)=>{
            if(err||!user){
                res.status(401).json({
                    message:"Could not find user"
                });
            }
            req.user = {user};
            next();
        });
};

exports.accountUpdate = (req,res)=>{
    const {userId}=req.userTokenData;
    const { firstName, lastName, email, smsAlerts } = req.body;
    console.log("id"+id+','+smsAlerts);
    User.findOne({ _id: userId }, (err, user) => {
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.smsAlerts=true;
        user.save((err,updatedUser)=>{
            res.json(updatedUser);
        });
    });
};

exports.changePassword = (req,res)=>{
    const {userId}=req.userTokenData;
    const { password } = req.body;

    User.findOne({ _id: userId }, (err, user) => {
        bcrypt.hash(password, 10, function(err, hashPassword) {
            user.password=hashPassword;
            user.save((err,updatedUser)=>{
                res.json(updatedUser);
            });
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
    const url = `https://api.twelvedata.com/time_series?symbol=DJI&interval=5min&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const fetch_res = await fetch(url);
    const json = await fetch_res.json();
    res.json({hello:json});
};

exports.stockSearch = (req,res)=>{

};
// url: /stock?symbol={stockSymbol}
exports.stock = async (req,res)=>{
    const stockSymbol = req.query.symbol;
    // const {stockSymbol} = req.stockSymbol;
    const url = `https://finnhub.io/api/v1/stock/metric?symbol=${stockSymbol}&metric=all&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const fetch_res = await fetch(url);
    const json = await fetch_res.json();
    res.json({hello:json});
};
// url: /stock/news?symbol={stockSymbol}
exports.stockNews = async (req,res)=>{
    const stockSymbol = req.query.symbol;
    // const {stockSymbol} = req.stockSymbol;
    const url = `https://newsapi.org/v2/everything?q=${stockSymbol}&from=2021-07-28&sortBy=publishedAt&apiKey=${process.env.STOCK_NEWS_API_KEY}`;
    const fetch_res = await fetch(url);
    const json = await fetch_res.json();
    res.json({hello:json.articles});
};