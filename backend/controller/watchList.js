const { Stock, WatchList } = require('../models/watchList');
const fetch = require('node-fetch');
require("dotenv").config();

exports.watchList=(req,res)=>{
    const {userId}=req.userTokenData;
    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(400).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        // console.log('watchlist::::::::::::'+watchList.stocks);
        res.status(200).json({
            watchList:watchList.stocks.reverse().filter(function(stock){
                // if(!stock.priceTargetReached){
                    return stock;
                // }
            })
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
            if(watchListArr[i].tickerSymbol===req.body.symbol){
                return res.status(401).json({error:'Error: Stock already exist'});
            }
        }
        let stockSymbol=req.body.stockSymbol;
        // mock prices
        const finnhub=`https://mockstockapi.herokuapp.com/api/stockLivePrice?stock=${stockSymbol}`;
        const finnhubRes = await fetch(finnhub);
        const pricePromise = await finnhubRes.json();
        const stockPrice=pricePromise.price;
        // live prices
        // const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
        // const finnhubRes=await fetch(finnhub);
        // const pricePromise=await finnhubRes.json();
        // const stockPrice=pricePromise.c;

        const alertPrice=req.body.priceAlert;

        let alertDirection;
        console.log('ADD TO WATCHLIST :::::'+alertPrice+'STOCK PRICE'+stockPrice);
        if(parseFloat(alertPrice)>parseFloat(stockPrice)){
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
    
    WatchList.findOne({ owner: userId}, async (err, watchList) => {  
        if(err){
            return res.status(401).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }

        // boolean variable to check if symbol to be updated exist
        let stockSymbolExist=false;

        let stockSymbol=req.body.symbol;

        // mock prices
        const finnhub=`https://mockstockapi.herokuapp.com/api/stockLivePrice?stock=${stockSymbol}`;
        const finnhubRes = await fetch(finnhub);
        const pricePromise = await finnhubRes.json();
        const stockPrice=pricePromise.price;
        // live prices
        // const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
        // const finnhubRes=await fetch(finnhub);
        // const pricePromise=await finnhubRes.json();
        // const stockPrice=pricePromise.c;

        let alertPrice=req.body.priceAlert;
        for(let i=0; i<watchList.stocks.length;i++){
            if(watchList.stocks[i].tickerSymbol===req.body.symbol){
                stockSymbolExist=true;
                watchList.stocks[i].alertPrice=req.body.priceAlert;
                if(parseFloat(alertPrice)>parseFloat(stockPrice)){
                    watchList.stocks[i].alertDirection='above';
                }
                else{
                    watchList.stocks[i].alertDirection='below';
                }
            }
        }

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
        if(req.body.symbol===undefined){
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
