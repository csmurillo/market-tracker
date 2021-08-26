const { Stock, WatchList } = require('../models/watchList');
const fetch = require('node-fetch');
require("dotenv").config();

exports.watchList=(req,res)=>{
    const {userId}=req.userTokenData;
    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        res.status(200).json({
            watchList
        });
    });
};

exports.addToWatchList=(req,res)=>{
    const {userId}=req.userTokenData;
    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        const stock=new Stock({
            tickerSymbol:"APPL",
            alertPrice:"150"
        });
        watchList.stocks.push(stock);
        watchList.save((err,watchList)=>{
            console.log(watchList);
            res.json(watchList);
        });
    });
};