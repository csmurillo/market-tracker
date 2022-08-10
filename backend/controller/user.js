const User = require('../models/user');
const { Stock, WatchList } = require('../models/watchList');
const fetch = require('node-fetch');
const bcrypt = require("bcrypt");

const {defaultDayMovementArray}= require('../helpers/userHelper');

const {searchSymbol,search} = require('../helpers/searchStockSymbol');

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

exports.stockSymbol = (req,res,next,symbol)=>{
    req.symbol=symbol;
    console.log('symbol'+symbol);
    next();
};

exports.getUserInformation=(req,res)=>{
    const {userId}=req.userTokenData;
    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        user.smsAlerts=undefined;
        user.password=undefined;
        res.json(user);
        
    });

};

exports.accountUpdate = (req,res)=>{
    const {userId}=req.userTokenData;
    const { firstName, lastName, email, phone } = req.body;

    const accountFieldsNotFilled= (firstName==undefined)||(lastName==undefined)||(email==undefined);
    if(accountFieldsNotFilled){
        return res.json({
            message: {serverError:"Please fill in all fields"}
        });
    }

    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    error: {serverError:"Sorry for the inconvenience something went wrong, our team is working to fix the problem."}
            });
        }
       

        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.phone=phone;
        user.save((err,updatedUser)=>{
            if(err){
                return res.status(401).json({
                    error:{serverError:"Email Already Exists"}
                });
            }
            updatedUser.smsAlerts=undefined;
            updatedUser.password=undefined;
            res.json(updatedUser);
        });
    });
};

exports.getEnableAlerts = (req,res)=>{
    const {userId}=req.userTokenData;

    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    error: {serverError:"Sorry for the inconvenience something went wrong, our team is working to fix the problem."}
            });
        }
        res.json({
            smsAlerts:user.smsAlerts
        });
    });
};

exports.updateEnableAlerts=(req,res)=>{
    const {userId}=req.userTokenData;
    const { smsAlerts } = req.body;

    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    error: {serverError:"Sorry for the inconvenience something went wrong, our team is working to fix the problem."}
            });
        }
        user.smsAlerts=smsAlerts;
        user.save((err,updatedUser)=>{
            if(err){
                return res.status(401).json({
                    error: {serverError:"Sorry for the inconvenience something went wrong, our team is working to fix the problem."}
                });
            }
            res.json({success:true});
        });
    });
};

exports.changePassword = (req,res)=>{
    const {userId}=req.userTokenData;
    const { password } = req.body;
    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                error:{serverError:"Error 401 Server Error"}
            });
        }
        bcrypt.hash(password, 10, function(err, hashPassword) {
            if(err){
                return res.status(401).json({
                    error:{serverError:"Error 401 Server Error"}
                });
            }
            user.password=hashPassword;
            user.save((err,updatedUser)=>{
                if(err){
                    return res.status(401).json({
                            error:{serverError:"Error 401 Server Error"}
                    });
                }
                updatedUser.password=undefined;
                res.json(updatedUser);
            });
        });
    });
};

// must be tested 

exports.addToStockHistory = (req,res)=>{
    console.log('INSIDE ADDTOSTOCKHISTORY');
    // const {userId}=req.userTokenData;
    const userId=req.query.owner;
    console.log(userId);
    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            return res.status(401).json({
                    message:err
            });
        }

        console.log('ADD TO STOCK HISTORY ADD TO STOCK HISTORY ADD TO STOCK HISTORY ADD TO STOCK HISTORY');
        console.log(req.body.tickerSymbol+'.'+req.body.priceAlert);

        const stock=new Stock({
            tickerName:req.body.tickerName,
            tickerSymbol:req.body.tickerSymbol,
            alertPrice:req.body.priceAlert,
            alertDirection:req.body.alertDirection
        });

        user.stockHistory.push(stock);

        user.save((err,updatedUser)=>{
            if(err){
                console.log('err'+err);
            }
            console.log(updatedUser);
            // res.json(updatedUser);
        });
    });
};

exports.stockHistory = (req,res)=>{
    const {userId}=req.userTokenData;
    console.log('STOCK HISTORY STOCK HISTORY STOCK HISTORY STOCK HISTORY STOCK HISTORY');
    console.log('stock history route hit');

    // WatchList.findOne({ owner: userId}, (err, watchList) => {
    //     if(err){
    //         return res.status(400).json({
    //             error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
    //         });
    //     }
    //     res.status(200).json({
    //         stocks:watchList.stocks.filter(function(stock){
    //             if(stock.priceTargetReached){
    //                 return stock;
    //             }
    //         })
    //     });
    // });
    User.findOne({ _id: userId }, (err, user) => {
        if(err){
            res.status(400).json({
                error:err
            });
        }
        console.log(user.stockHistory);
        res.json({stocks:user.stockHistory});
    });
};

exports.dowjones = async (req,res)=>{
    // const twelveDowjones = `https://api.twelvedata.com/time_series?symbol=DJI&interval=5min&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    // const twelveData = await fetch(twelveDowjones);
    // const twelveDowjonesData = await twelveData.json();
    const twelveDowjonesData={"dowjones":{"meta":{"symbol":"DJI","interval":"5min","currency":"USD","exchange_timezone":"America/New_York","exchange":"NYSE","type":"Index"},"values":[{"datetime":"2022-05-04 15:55:00","open":"34066.32812","high":"34080.26953","low":"34023.98828","close":"34056.53906","volume":"21762703"},{"datetime":"2022-05-04 15:50:00","open":"34076.08984","high":"34117.73828","low":"34058.35156","close":"34062.73047","volume":"13078016"},{"datetime":"2022-05-04 15:45:00","open":"34042.51172","high":"34076.96875","low":"33999.41016","close":"34073.39844","volume":"9502607"},{"datetime":"2022-05-04 15:40:00","open":"34019.25000","high":"34051.71094","low":"33982.58984","close":"34043.16016","volume":"8662693"},{"datetime":"2022-05-04 15:35:00","open":"34032.32031","high":"34033.94922","low":"33986.64844","close":"34025.01172","volume":"7013912"},{"datetime":"2022-05-04 15:30:00","open":"33948.35156","high":"34036.46094","low":"33943.60156","close":"34032.96094","volume":"6841223"},{"datetime":"2022-05-04 15:25:00","open":"33872.35156","high":"33949.03125","low":"33872.28906","close":"33946.66016","volume":"5496955"},{"datetime":"2022-05-04 15:20:00","open":"33807.89844","high":"33873.62891","low":"33806.64844","close":"33873.35156","volume":"5737883"},{"datetime":"2022-05-04 15:15:00","open":"33835.55859","high":"33881.71875","low":"33787.53906","close":"33807.07812","volume":"7534566"},{"datetime":"2022-05-04 15:10:00","open":"33787.41016","high":"33845.98047","low":"33787.41016","close":"33835.66016","volume":"5614682"},{"datetime":"2022-05-04 15:05:00","open":"33733.66016","high":"33798.85156","low":"33722.62891","close":"33786.07031","volume":"5732368"},{"datetime":"2022-05-04 15:00:00","open":"33715.71094","high":"33767.98047","low":"33686.51172","close":"33734.25000","volume":"6334689"},{"datetime":"2022-05-04 14:55:00","open":"33726.87891","high":"33764.08984","low":"33680.21875","close":"33715.51172","volume":"6303902"},{"datetime":"2022-05-04 14:50:00","open":"33575.01953","high":"33726.12109","low":"33559.82812","close":"33725.94141","volume":"6486019"},{"datetime":"2022-05-04 14:45:00","open":"33432.28125","high":"33639.73047","low":"33432.28125","close":"33575.57812","volume":"8755171"},{"datetime":"2022-05-04 14:40:00","open":"33230.78906","high":"33489.82031","low":"33208.55078","close":"33433.46094","volume":"9172527"},{"datetime":"2022-05-04 14:35:00","open":"33092.82812","high":"33264.32812","low":"33054.89844","close":"33248.17188","volume":"7455379"},{"datetime":"2022-05-04 14:30:00","open":"33367.69141","high":"33401.05859","low":"33071.94922","close":"33094.76953","volume":"8194832"},{"datetime":"2022-05-04 14:25:00","open":"33244.44922","high":"33402.28125","low":"33228.23828","close":"33368.76953","volume":"4359340"},{"datetime":"2022-05-04 14:20:00","open":"33219.00000","high":"33264.21094","low":"33158.23047","close":"33248.73047","volume":"4722138"},{"datetime":"2022-05-04 14:15:00","open":"33274.91016","high":"33278.23047","low":"33193.35156","close":"33220.30078","volume":"3221037"},{"datetime":"2022-05-04 14:10:00","open":"33271.92188","high":"33325.60156","low":"33240.64062","close":"33273.85938","volume":"4275074"},{"datetime":"2022-05-04 14:05:00","open":"33330.46094","high":"33381.03125","low":"33203.58984","close":"33266.80859","volume":"6088095"},{"datetime":"2022-05-04 14:00:00","open":"33254.62891","high":"33384.55859","low":"33204.10156","close":"33328.94141","volume":"10869320"},{"datetime":"2022-05-04 13:55:00","open":"33230.37109","high":"33310.73828","low":"33224.85156","close":"33252.64844","volume":"3987563"},{"datetime":"2022-05-04 13:50:00","open":"33229.66016","high":"33231.69141","low":"33211.46875","close":"33230.78906","volume":"1875761"},{"datetime":"2022-05-04 13:45:00","open":"33246.87891","high":"33247.55859","low":"33229.73828","close":"33229.76172","volume":"2055741"},{"datetime":"2022-05-04 13:40:00","open":"33220.64844","high":"33248.51953","low":"33212.42188","close":"33246.32031","volume":"2223486"},{"datetime":"2022-05-04 13:35:00","open":"33244.89062","high":"33256.12109","low":"33187.44141","close":"33220.69922","volume":"2983689"},{"datetime":"2022-05-04 13:30:00","open":"33233.94141","high":"33245.50000","low":"33206.35156","close":"33243.67188","volume":"2584251"}],"status":"ok"}};
    console.log(twelveDowjonesData);
    res.json({dowjones:twelveDowjonesData});
};

// url: /stock?symbol={stockSymbbol}
exports.stockSearch = async (req,res)=>{
    const searchArr=search(req.query.symbol);
    res.json({searchResult:searchArr});
    // const stockSymbol = req.query.symbol;
    // const twelveSearchStock = `https://api.twelvedata.com/symbol_search?symbol=${stockSymbol}&source=docs`;
    // const twelveSearchRes = await fetch(twelveSearchStock);
    // const twelveStockSearchData = await twelveSearchRes.json();
    // const newTwelveStockSearchData = twelveStockSearchData.data.filter((stocks)=>{
    //     if(stocks.exchange=="NYSE"){
    //         return stocks;
    //     }
    //     else if(stocks.exchange=="NASDAQ"){
    //         return stocks;
    //     }
    // });

    // res.json({searchResult:newTwelveStockSearchData});
};

// url: /stock/stockSymbol
exports.stock = async (req,res)=>{
    const stockSymbol = req.symbol;
    const stockSymbolName=searchSymbol(stockSymbol);

    // using real api
    // const finnhub=`https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    // const finnhubRes=await fetch(finnhub);
    // const finnData=await finnhubRes.json();

    // const twelvedata=`https://api.twelvedata.com/quote?symbol=${stockSymbol}&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    // const twelveRes = await fetch(twelvedata);
    // const twelveData = await twelveRes.json();

    // const stockData = {
    //     stockName:stockSymbolName,
    //     marketCap:finnData.marketCapitalization,
    //     volume:twelveData.volume,
    //     averageVolume:twelveData.average_volume,
    //     fiftytwoWeekHigh:twelveData.high,
    //     fiftytwoWeekLow:twelveData.low,
    //     openPrice:twelveData.open
    // };

    // using mock api
    // const stockInfo = `https://localhost:3005/api/stockInformation?stock=${stockSymbol}`;
    const stockInfo =  `https://mockstockapi.herokuapp.com/api/stockInformation?stock=${stockSymbol}`;
    const stockInfoRes = await fetch(stockInfo);
    const stockInfoData = await stockInfoRes.json();

    const stockData = {
        stockName:stockSymbolName,
        marketCap:stockInfoData.marketCap,
        volume:stockInfoData.volume,
        averageVolume:stockInfoData.avgVolume,
        fiftytwoWeekHigh:stockInfoData.weekHigh52,
        fiftytwoWeekLow:stockInfoData.weekLow52,
        openPrice:stockInfoData.openPrice
    };
    res.json(stockData);
};

// url: /stock/price/stockSymbol
exports.stockPrice=async (req,res)=>{
    const stockSymbol = req.symbol;
    const livePrice = `https://mockstockapi.herokuapp.com/api/stockLivePrice?stock=${stockSymbol}`
    // const livePrice=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const livePriceRes=await fetch(livePrice);
    const liveStockPriceData=await livePriceRes.json();
    console.log('***********************************');
    console.log(liveStockPriceData.price);
    console.log('***********************************');
    // mock data
    res.json({
        stock:stockSymbol,
        currentPrice:liveStockPriceData.price,
        dollarPriceChange:liveStockPriceData.changePrice,
        percentPriceChange:liveStockPriceData.changePricePercentage
    });

    // live data
    // res.json({
    //     stock:stockSymbol,
    //     currentPrice:liveStockPriceData.c,
    //     dollarPriceChange:liveStockPriceData.d,
    //     percentPriceChange:liveStockPriceData.dp
    // });
};

// url: /stock/news/stockSymbol
exports.stockNews = async (req,res)=>{
    console.log('inside stockNews');
    const stockSymbol = req.symbol;
    console.log(stockSymbol+'stockSymbol');
    // const {stockSymbol} = req.stockSymbol;
    const newapi = `https://newsapi.org/v2/everything?q=${stockSymbol}&from=2022-07-28&sortBy=publishedAt&apiKey=${process.env.STOCK_NEWS_API_KEY}`;
    const newsRes = await fetch(newapi);
    const newsData = await newsRes.json();
    // console.log('newsdata'+newsRes);
    res.json({news:newsData});
};

exports.stockMovement = async (req,res)=>{
    const stockSymbol = req.symbol;
    const stockTimeSeries = `https://mockstockapi.herokuapp.com/api/stockDayHistory?stock=${stockSymbol}`;
    // const stockTimeSeries = `https://localhost:3005/api/stockDayHistory?stock=${stockSymbol}`;
    // live data
    // const stockTimeSeries = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=84&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const timeSeriesRes = await fetch(stockTimeSeries);
    const timeSeriesData = await timeSeriesRes.json();

    // live data
    // let recentDate = timeSeriesData.values[0].datetime;
    // let recentDateFormat = recentDate.split(' ')[0];

    let {timeArray,priceArray}=defaultDayMovementArray();
    
    console.log('inside user stock movement checking if array this is timearray:'+typeof timeArray+'this is priceArray'+ typeof priceArray);
    console.log('------------------------------------------------------------------------------------------------------------------------');

    // when changing back to live data remove reverse()
    timeSeriesData.values.reverse().forEach((stockData,index)=>{
        priceArray[index]=stockData.open;

        // live data
        // let dateFromStockData =stockData.datetime;
        // let dateDataFormat = dateFromStockData.split(' ')[0];
        // const time = stockData.datetime;

        
        // for(var i=0; i<timeArray.length;i++){
        //     if(recentDateFormat===dateDataFormat){
        //         if(timeArray[i]===time){
        //             priceArray[i]=stockData.open;
        //         }
        //     }
        // }
    });

    res.json({
        time:timeArray,
        price:priceArray.reverse()
        // time:timeArray.reverse(), 
        // price:priceArray.reverse()
    });
};

exports.stockWeekMovement = async (req,res)=>{
    const stockSymbol = req.symbol;
    const stockTimeSeries = `https://mockstockapi.herokuapp.com/api/stockWeekHistory?stock=${stockSymbol}`;
    // const stockTimeSeries = `https://localhost:3005/api/stockWeekHistory?stock=${stockSymbol}`;
    // const stockTimeSeries = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=1000&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const timeSeriesRes = await fetch(stockTimeSeries);
    const timeSeriesData = await timeSeriesRes.json();
    // console.log(timeSeriesData);
    console.log('stock week movement');

    const timeArray = [];
    const priceArray = [];
    
    timeSeriesData.values.forEach((stockData)=>{
        const todayDate = new Date(Date.now());
        const todayDateArray = todayDate.toString().split(' ');
        const todayDateFormat =  todayDateArray[0]+' '+todayDateArray[1]+' '+todayDateArray[2]+' '+todayDateArray[3];
        const todayDateFormatted = new Date(todayDateFormat);
        todayDateFormatted.setDate(todayDateFormatted.getDate()-7);
        
        const dateFromStockData=new Date(stockData.datetime.toString());
        const dateData = new Date(dateFromStockData);

        if(todayDateFormatted<dateData){
            timeArray.push(dateData.toLocaleString());
            priceArray.push(stockData.close);
        }
    });
    res.json({
        time:timeArray.reverse(), 
        price:priceArray.reverse()
    });
};

exports.stockMonthMovement=async(req,res)=>{
    const stockSymbol = req.symbol;
    const stockTimeSeries = `https://mockstockapi.herokuapp.com/api/stockMonthHistory?stock=${stockSymbol}`;
    // const stockTimeSeries = `https://localhost:3005/api/stockMonthHistory?stock=${stockSymbol}`;
    // const stockTimeSeries = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=2500&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const timeSeriesRes = await fetch(stockTimeSeries);
    const timeSeriesData = await timeSeriesRes.json();

    console.log(timeSeriesData+'!!!!');

    const timeArray = [];
    const priceArray = [];
    timeSeriesData.values.forEach((stockData)=>{
        const todayDate = new Date(Date.now());
        const todayDateArray = todayDate.toString().split(' ');
        const todayDateFormat =  todayDateArray[0]+' '+todayDateArray[1]+' '+todayDateArray[2]+' '+todayDateArray[3];
        const todayDateFormatted = new Date(todayDateFormat);
        todayDateFormatted.setDate(todayDateFormatted.getDate()-30);
        
        const dateFromStockData=new Date(stockData.datetime.toString());
        const dateData = new Date(dateFromStockData);

        if(todayDateFormatted<dateData){
            timeArray.push(dateData.toLocaleString());
            priceArray.push(stockData.close);
        }
    });
    res.json({
        time:timeArray.reverse(), 
        price:priceArray.reverse()
    });
};

exports.stockYearMovement=async(req,res)=>{
    const stockSymbol = req.symbol;
    const stockHistoricData=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=full&apikey=${process.env.STOCK_ALPHA_ADVANTAGE}`;
    const stockHistoricRes=await fetch(stockHistoricData);
    const stockSeriesData=await stockHistoricRes.json();
    const yearMovement=stockSeriesData;
    const yearMovementData=yearMovement['Time Series (Daily)'];
    
    let yearData=[];
    let yearDate='';
    // get first date from json data=>yearMovementData
    let [firstDate]=Object.keys(yearMovementData);
    let dateArray=firstDate.split('-');
    let yearDateYear=dateArray[0]-1;
    let yearDateMonth=dateArray[1];
    let yearDateDay=dateArray[2];
    yearDate=yearDateYear+'-'+yearDateMonth+'-'+yearDateDay;
    
    const yearDateArray = [];
    const yearPriceArray = [];

    for(let data in yearMovementData){
        let date=data;
        if(yearDate>date){
            return res.json({
                time:yearDateArray.reverse(),
                price:yearPriceArray.reverse()
            });
        }
        if (yearMovementData.hasOwnProperty(data)) {
            yearDateArray.push(data);
            yearPriceArray.push(yearMovementData[data]['4. close']);
        }
    }
    res.json(yearData);
};

exports.stockFiveYearMovement=async(req,res)=>{ 
    const stockSymbol = req.symbol;
    console.log(stockSymbol);
    const stockHistoricData=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=full&apikey=${process.env.STOCK_ALPHA_ADVANTAGE}`;
    const stockHistoricRes=await fetch(stockHistoricData);
    const stockSeriesData=await stockHistoricRes.json();
    const fiveYearMovement=stockSeriesData;
    const fiveYearMovementData=fiveYearMovement['Time Series (Daily)'];
    
    let fiveYearData=[];
    let fiveYearDate='';
    // get first data from json data=>fiveYearMovementData
    let [firstDate]=Object.keys(fiveYearMovementData);
    let dateArray=firstDate.split('-');
    let fiveYearDateYear=dateArray[0]-5;
    let fiveYearDateMonth=dateArray[1];
    let fiveYearDateDay=dateArray[2];
    fiveYearDate=fiveYearDateYear+'-'+fiveYearDateMonth+'-'+fiveYearDateDay;

    const fiveYearDateArray = [];
    const fiveYearPriceArray = [];

    for(let data in fiveYearMovementData){
        let date=data;
        if(fiveYearDate>date){
            return res.json({
                time:fiveYearDateArray.reverse(),
                price:fiveYearPriceArray.reverse()
            });
        }
        if (fiveYearMovementData.hasOwnProperty(data)) {
            fiveYearDateArray.push(data);
            fiveYearPriceArray.push(fiveYearMovementData[data]['4. close']);
        }
    }
};

exports.stockOnWatchList = (req,res)=>{
    const {userId}=req.userTokenData;
    const tickerSymbol=req.symbol;

    WatchList.findOne({ owner: userId}, (err, watchList) => {
        if(err){
            return res.status(400).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        const userWatchListStocks = watchList.stocks;
        for(let stockList of userWatchListStocks){
            const watchListSymbol=stockList.tickerSymbol;
            if(tickerSymbol===watchListSymbol){
                if(!stockList.priceTargetReached){
                    return res.json({
                        inWatchList:true,
                        price:stockList.alertPrice
                    });
                }
            }
        }
        // userWatchListStocks.forEach(stockList=>{
        //     const watchListSymbol=stockList.tickerSymbol;
        //     if(tickerSymbol==watchListSymbol){
        //         return res.json({
        //             inWatchList:true,
        //             price:stockList.alertPrice
        //         });
        //     }
        // });
        return res.json({
            inWatchList:false
        });
    });
    
};

exports.stockGainers = async(req,res)=>{
    // const sfmkapi = `https://financialmodelingprep.com/api/v3/stock/gainers?apikey=${process.env.STOCK_FINANCIAL_MODEL_KEY}`;
    // const sfmkRes = await fetch(sfmkapi);
    // const sfmkData = await sfmkRes.json();
    const sfmkData={"gainers":{"mostGainerStock":[{"ticker":"JCS","changes":2.66,"price":"9.41","changesPercentage":"39.407406","companyName":"Communications Systems, Inc."},{"ticker":"GXGX","changes":2.18,"price":"10.2","changesPercentage":"27.182037","companyName":"Celularity Inc."},{"ticker":"DFNS","changes":2.72,"price":"12.85","changesPercentage":"26.8509","companyName":"LGL Systems Acquisition Corp."},{"ticker":"IRNT","changes":3.93,"price":"23.32","changesPercentage":"20.2682","companyName":"IronNet Cybersecurity, Inc."},{"ticker":"NNVC","changes":0.76,"price":"4.83","changesPercentage":"18.673212","companyName":"NanoViricides, Inc."},{"ticker":"CLMT","changes":1.07,"price":"7.21","changesPercentage":"17.426712","companyName":"Calumet Specialty Products Partners, L.P."},{"ticker":"KZR","changes":1.33,"price":"8.97","changesPercentage":"17.408382","companyName":"Kezar Life Sciences, Inc."},{"ticker":"BLU","changes":0.79,"price":"5.57","changesPercentage":"16.527195","companyName":"BELLUS Health Inc."},{"ticker":"NRXP","changes":1.66,"price":"12.64","changesPercentage":"15.118405","companyName":"NRx Pharmaceuticals, Inc."},{"ticker":"FCEL","changes":0.82,"price":"6.44","changesPercentage":"14.590751","companyName":"FuelCell Energy, Inc."},{"ticker":"CEI","changes":0.19,"price":"1.58","changesPercentage":"13.669069","companyName":"Camber Energy, Inc."},{"ticker":"DATS","changes":0.86,"price":"7.4","changesPercentage":"13.149849","companyName":"DatChat, Inc."},{"ticker":"PYR","changes":0.51,"price":"4.55","changesPercentage":"12.623768","companyName":"PyroGenesis Canada Inc."},{"ticker":"MTNB","changes":0.13,"price":"1.18","changesPercentage":"12.380953","companyName":"Matinas BioPharma Holdings, Inc."},{"ticker":"JNCE","changes":0.77,"price":"7.24","changesPercentage":"11.901082","companyName":"Jounce Therapeutics, Inc."},{"ticker":"NCSM","changes":3.1,"price":"29.67","changesPercentage":"11.667295","companyName":"NCS Multistage Holdings, Inc."},{"ticker":"IMRX","changes":2.48,"price":"25.87","changesPercentage":"10.602828","companyName":"Immuneering Corporation"},{"ticker":"AXAS","changes":0.18,"price":"1.91","changesPercentage":"10.404621","companyName":"Abraxas Petroleum Corporation"},{"ticker":"LSXMB","changes":4.878,"price":"52.098","changesPercentage":"10.3304","companyName":"The Liberty SiriusXM Group"},{"ticker":"ICCC","changes":0.92,"price":"9.97","changesPercentage":"10.165747","companyName":"ImmuCell Corporation"},{"ticker":"SFTW","changes":1.01,"price":"11.41","changesPercentage":"9.71154","companyName":"Osprey Technology Acquisition Corp."},{"ticker":"SBTX","changes":1.38,"price":"16.28","changesPercentage":"9.261753","companyName":"Silverback Therapeutics, Inc."},{"ticker":"ANGI","changes":0.98,"price":"11.68","changesPercentage":"9.158883","companyName":"Angi Inc."},{"ticker":"SMHI","changes":0.39,"price":"4.84","changesPercentage":"8.764053","companyName":"SEACOR Marine Holdings Inc."},{"ticker":"AGTI","changes":1.74,"price":"22.22","changesPercentage":"8.496093","companyName":"Agiliti, Inc."},{"ticker":"CROX","changes":11.66,"price":"149.38","changesPercentage":"8.466456","companyName":"Crocs, Inc."},{"ticker":"SRACU","changes":0.94,"price":"12.2","changesPercentage":"8.348131","companyName":"Stable Road Acquisition Corp."},{"ticker":"TMCI","changes":2.29,"price":"29.99","changesPercentage":"8.267144","companyName":"Treace Medical Concepts, Inc."},{"ticker":"MLAB","changes":22.92,"price":"302.92","changesPercentage":"8.185719","companyName":"Mesa Laboratories, Inc."},{"ticker":"AFHBL","changes":0.9,"price":"11.95","changesPercentage":"8.144793","companyName":"Atlas Financial Holdings, Inc."}]}};
    // console.log(sfmkData);
    // console.log('00000000000000000000000000000000');
    res.json({gainers:sfmkData});
};

exports.stockLosers = async(req,res)=>{
    const sfmkData = {"losers":{"mostLoserStock":[{"ticker":"SPRT","changes":-7.3,"price":"11.8","changesPercentage":"-38.219894","companyName":"Support.com, Inc."},{"ticker":"BYSI","changes":-7.55,"price":"15.36","changesPercentage":"-32.95504","companyName":"BeyondSpring Inc."},{"ticker":"PTGX","changes":-4.58,"price":"12.95","changesPercentage":"-26.126644","companyName":"Protagonist Therapeutics, Inc."},{"ticker":"AVTE","changes":-5.23,"price":"14.93","changesPercentage":"-25.94246","companyName":"Aerovate Therapeutics, Inc."},{"ticker":"LKCO","changes":-0.4,"price":"1.19","changesPercentage":"-25.15723","companyName":"Luokung Technology Corp."},{"ticker":"NTP","changes":-6.62,"price":"21.46","changesPercentage":"-23.5755","companyName":"Nam Tai Property Inc."},{"ticker":"AEI","changes":-0.65,"price":"2.4","changesPercentage":"-21.31147","companyName":"Alset EHome International Inc."},{"ticker":"FLGC","changes":-1.12,"price":"5.2","changesPercentage":"-17.721525","companyName":"Flora Growth Corp."},{"ticker":"GOGL","changes":-1.91,"price":"9.3","changesPercentage":"-17.038357","companyName":"Golden Ocean Group Limited"},{"ticker":"SCPS","changes":-0.87,"price":"4.26","changesPercentage":"-16.959063","companyName":"Scopus BioPharma Inc."},{"ticker":"RAIN","changes":-2.67,"price":"13.21","changesPercentage":"-16.813602","companyName":"Rain Therapeutics Inc."},{"ticker":"BTX","changes":-1.99,"price":"9.96","changesPercentage":"-16.652718","companyName":"Brooklyn ImmunoTherapeutics, Inc."},{"ticker":"ZH","changes":-1.48,"price":"7.87","changesPercentage":"-15.828882","companyName":"Zhihu Inc."},{"ticker":"SRRK","changes":-6.41,"price":"34.09","changesPercentage":"-15.82716","companyName":"Scholar Rock Holding Corporation"},{"ticker":"EBET","changes":-5.09,"price":"27.35","changesPercentage":"-15.690501","companyName":"Esports Technologies, Inc."},{"ticker":"VERA","changes":-3.18,"price":"17.75","changesPercentage":"-15.193504","companyName":"Vera Therapeutics, Inc."},{"ticker":"TKAT","changes":-1.3,"price":"7.47","changesPercentage":"-14.823268","companyName":"Takung Art Co., Ltd."},{"ticker":"ELEV","changes":-1.35,"price":"7.86","changesPercentage":"-14.657979","companyName":"Elevation Oncology, Inc."},{"ticker":"XYF","changes":-0.7,"price":"4.1","changesPercentage":"-14.583339","companyName":"X Financial"},{"ticker":"AMEH","changes":-14,"price":"82.81","changesPercentage":"-14.461316","companyName":"Apollo Medical Holdings, Inc."},{"ticker":"GNK","changes":-2.94,"price":"17.59","changesPercentage":"-14.320509","companyName":"Genco Shipping & Trading Limited"},{"ticker":"DSX","changes":-0.82,"price":"5.03","changesPercentage":"-14.017089","companyName":"Diana Shipping Inc."},{"ticker":"EDRY","changes":-4.54,"price":"27.85","changesPercentage":"-14.016668","companyName":"EuroDry Ltd."},{"ticker":"BRN","changes":-0.37,"price":"2.27","changesPercentage":"-14.015156","companyName":"Barnwell Industries, Inc."},{"ticker":"EQOS","changes":-0.64,"price":"3.93","changesPercentage":"-14.004378","companyName":"Diginex Limited"},{"ticker":"IPWR","changes":-2.25,"price":"13.91","changesPercentage":"-13.923268","companyName":"Ideal Power Inc."},{"ticker":"CARV","changes":-2.12,"price":"13.15","changesPercentage":"-13.883437","companyName":"Carver Bancorp, Inc."},{"ticker":"EVLO","changes":-1.15,"price":"7.19","changesPercentage":"-13.78897","companyName":"Evelo Biosciences, Inc."},{"ticker":"AVCT","changes":-0.45,"price":"2.83","changesPercentage":"-13.719514","companyName":"American Virtual Cloud Technologies, Inc."},{"ticker":"SGBX","changes":-0.53,"price":"3.35","changesPercentage":"-13.6598","companyName":"SG Blocks, Inc."}]}};
    // const sfmkapi = `https://financialmodelingprep.com/api/v3/stock/losers?apikey=${process.env.STOCK_FINANCIAL_MODEL_KEY}`;
    // const sfmkRes = await fetch(sfmkapi);
    // const sfmkData = await sfmkRes.json();
    console.log(sfmkData);
    res.json({losers:sfmkData});
};
