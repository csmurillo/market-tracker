const { Stock, WatchList } = require('../models/watchList');
const fetch = require('node-fetch');
const { getStockCurrentPrice } = require('../helpers/userHelper');
require("dotenv").config();

exports.watchList=(req,res)=>{
    const {userId}=req.userTokenData;
    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(400).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        console.log('watchlist'+watchList.stocks);
        res.status(200).json({
            watchList:watchList.stocks
        });
    });
};
exports.addToWatchList= (req,res)=>{
    const {userId}=req.userTokenData;
    WatchList.findOne({ owner: userId}, async(err, watchList) => {
        if(err){
            return res.status(401).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        // check for duplicates
        let watchListArr=watchList.stocks;
        for(let i=0; i<watchListArr.length;i++){
            if(watchListArr[i].tickerSymbol==req.body.symbol){
                return res.status(401).json({error:'Error: Stock already exist'});
            }
        }
        let stockSymbol=req.body.stockSymbol;
        const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
        const finnhubRes=await fetch(finnhub);
        const pricePromise=await finnhubRes.json();
        const stockPrice=pricePromise.c;
        const alertPrice=req.body.priceAlert;

        let alertDirection;
        if(parseInt(alertPrice)>parseInt(stockPrice)){
            alertDirection='above';
        }
        else{
            alertDirection='below';
        }

        const stock=new Stock({
            tickerName:req.body.stockName,
            tickerSymbol:req.body.stockSymbol,
            alertDirection,
            alertPrice,
        });
        
        watchList.stocks.push(stock);

        watchList.save((err,watchList)=>{
            if(err){
                return res.status(401).json({
                    error:"Error: Stock was not saved"
                });
            }
            res.json(watchList);
        });
    });
};
exports.updateWatchList=(req,res)=>{
    const {userId}=req.userTokenData;
    
    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(401).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }

        // boolean variable to check if symbol to be updated exist
        let stockSymbolExist=false;

        // update watchlist priceAlert
        watchList.stocks.map(stock=>{
            if(stock.tickerSymbol==req.body.symbol){
                stock.alertPrice=req.body.priceAlert;
                stockSymbolExist=true;
            }
            return stock;
        });

        if(!stockSymbolExist){
            return res.status(400).json({error:"Stock does not exist"});
        }

        watchList.save((err,watchList)=>{
            if(err){
                return res.status(401).json({
                    error:"Error: Stock was not saved"
                });
            }
            res.json(watchList);
        });
    });
};
exports.removeFromWatchList=(req,res)=>{
    const {userId}=req.userTokenData;
    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(400).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        // check if symbol exist
        if(req.body.symbol==undefined){
            return res.status(400).json({
                error: "Error: Could not remove stock from watchlist"
            });
        }
        console.log(req.body.symbol);
        // remove stock from watchlist
        watchList.stocks=watchList.stocks.filter(stock=>stock.tickerSymbol!=req.body.symbol);
        watchList.save((err,watchList)=>{
            if(err){
                return res.status(401).json({
                    error:"Error: Watchlist was not able to be updated"
                });
            }
            res.json(watchList);
        });
    });
};