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
    console.log('stock history route hit');

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
    // const twelveDowjones = `https://api.twelvedata.com/time_series?symbol=DJI&interval=5min&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    // const twelveData = await fetch(twelveDowjones);
    // const twelveDowjonesData = await twelveData.json();
    const twelveDowjonesData={"dowjones":{"meta":{"symbol":"DJI","interval":"5min","currency":"USD","exchange_timezone":"America/New_York","exchange":"NYSE","type":"Index"},"values":[{"datetime":"2021-09-14 15:55:00","open":"34581.76953","high":"34587.26953","low":"34561.23047","close":"34584.91016","volume":"17140396"},{"datetime":"2021-09-14 15:50:00","open":"34523.91016","high":"34592.32031","low":"34510.30078","close":"34583.96094","volume":"9450956"},{"datetime":"2021-09-14 15:45:00","open":"34554.05078","high":"34580.17188","low":"34516.69922","close":"34522.42969","volume":"5230134"},{"datetime":"2021-09-14 15:40:00","open":"34538.39062","high":"34564.64062","low":"34527.32812","close":"34553.00000","volume":"4290344"},{"datetime":"2021-09-14 15:35:00","open":"34541.48047","high":"34543.32812","low":"34520.21875","close":"34539.12109","volume":"3755019"},{"datetime":"2021-09-14 15:30:00","open":"34535.62109","high":"34548.96875","low":"34521.35938","close":"34541.62891","volume":"3675527"},{"datetime":"2021-09-14 15:25:00","open":"34542.14844","high":"34554.91016","low":"34526.57812","close":"34535.28906","volume":"3171111"},{"datetime":"2021-09-14 15:20:00","open":"34534.92188","high":"34568.87891","low":"34525.82812","close":"34542.42188","volume":"3687647"},{"datetime":"2021-09-14 15:15:00","open":"34556.64062","high":"34561.89062","low":"34530.48828","close":"34534.96094","volume":"3375573"},{"datetime":"2021-09-14 15:10:00","open":"34566.35938","high":"34577.87109","low":"34555.23047","close":"34556.64062","volume":"2502553"},{"datetime":"2021-09-14 15:05:00","open":"34568.19922","high":"34588.89844","low":"34563.44922","close":"34567.07812","volume":"2447258"},{"datetime":"2021-09-14 15:00:00","open":"34574.42969","high":"34574.42969","low":"34560.55859","close":"34568.75000","volume":"2529846"},{"datetime":"2021-09-14 14:55:00","open":"34546.58984","high":"34576.69922","low":"34542.73828","close":"34574.21875","volume":"3185393"},{"datetime":"2021-09-14 14:50:00","open":"34530.76953","high":"34546.42188","low":"34511.28906","close":"34546.42188","volume":"2895321"},{"datetime":"2021-09-14 14:45:00","open":"34561.58984","high":"34562.89844","low":"34527.03906","close":"34530.69922","volume":"2554350"},{"datetime":"2021-09-14 14:40:00","open":"34548.69922","high":"34570.53906","low":"34548.69922","close":"34561.67188","volume":"2587882"},{"datetime":"2021-09-14 14:35:00","open":"34549.08984","high":"34556.39844","low":"34535.03906","close":"34548.67969","volume":"3222710"},{"datetime":"2021-09-14 14:30:00","open":"34575.91016","high":"34575.91016","low":"34548.98047","close":"34548.98047","volume":"3099706"},{"datetime":"2021-09-14 14:25:00","open":"34589.80859","high":"34589.80859","low":"34567.46094","close":"34575.83984","volume":"3473672"},{"datetime":"2021-09-14 14:20:00","open":"34598.82812","high":"34598.82812","low":"34577.21875","close":"34589.57812","volume":"4388428"},{"datetime":"2021-09-14 14:15:00","open":"34615.23828","high":"34615.67969","low":"34598.21875","close":"34599.69141","volume":"4089397"},{"datetime":"2021-09-14 14:10:00","open":"34626.32812","high":"34630.55078","low":"34613.60938","close":"34615.03125","volume":"3069699"},{"datetime":"2021-09-14 14:05:00","open":"34640.75000","high":"34654.14844","low":"34624.96094","close":"34626.30859","volume":"2841885"},{"datetime":"2021-09-14 14:00:00","open":"34652.23047","high":"34652.48047","low":"34638.23047","close":"34640.64062","volume":"3080693"},{"datetime":"2021-09-14 13:55:00","open":"34654.01953","high":"34659.28906","low":"34649.73047","close":"34651.46094","volume":"2713311"},{"datetime":"2021-09-14 13:50:00","open":"34642.85156","high":"34660.83984","low":"34640.21094","close":"34653.96875","volume":"2241794"},{"datetime":"2021-09-14 13:45:00","open":"34659.87891","high":"34664.80078","low":"34642.17188","close":"34642.82812","volume":"2134227"},{"datetime":"2021-09-14 13:40:00","open":"34646.42969","high":"34659.75000","low":"34636.32812","close":"34659.75000","volume":"2244841"},{"datetime":"2021-09-14 13:35:00","open":"34622.55859","high":"34647.07031","low":"34614.71094","close":"34646.55859","volume":"2620482"},{"datetime":"2021-09-14 13:30:00","open":"34638.12109","high":"34638.32031","low":"34613.60156","close":"34623.92188","volume":"3497341"}],"status":"ok"}};
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

    const finnhub=`https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const finnhubRes=await fetch(finnhub);
    const finnData=await finnhubRes.json();

    const twelvedata=`https://api.twelvedata.com/quote?symbol=${stockSymbol}&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const twelveRes = await fetch(twelvedata);
    const twelveData = await twelveRes.json();
    const stockData = {
        stockName:stockSymbolName,
        marketCap:finnData.marketCapitalization,
        volume:twelveData.volume,
        averageVolume:twelveData.average_volume,
        fiftytwoWeekHigh:twelveData.high,
        fiftytwoWeekLow:twelveData.low,
        openPrice:twelveData.open
    };
    res.json(stockData);
};

// url: /stock/price/stockSymbol
exports.stockPrice=async (req,res)=>{
    const stockSymbol = req.symbol;
    const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const finnhubRes=await fetch(finnhub);
    const finnStockPriceData=await finnhubRes.json();
    res.json({
        stock:stockSymbol,
        currentPrice:finnStockPriceData.c,
        dollarPriceChange:finnStockPriceData.d,
        percentPriceChange:finnStockPriceData.dp
    });
};

// url: /stock/news/stockSymbol
exports.stockNews = async (req,res)=>{
    console.log('inside stockNews');
    const stockSymbol = req.symbol;
    console.log(stockSymbol+'stockSymbol');
    // const {stockSymbol} = req.stockSymbol;
    const newapi = `https://newsapi.org/v2/everything?q=${stockSymbol}&from=2022-04-20&sortBy=publishedAt&apiKey=${process.env.STOCK_NEWS_API_KEY}`;
    const newsRes = await fetch(newapi);
    const newsData = await newsRes.json();
    // console.log('newsdata'+newsRes);
    res.json({news:newsData});
};

exports.stockMovement = async (req,res)=>{
    const stockSymbol = req.symbol;
    const stockTimeSeries = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=84&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
    const timeSeriesRes = await fetch(stockTimeSeries);
    const timeSeriesData = await timeSeriesRes.json();

    let recentDate = timeSeriesData.values[0].datetime;
    let recentDateFormat = recentDate.split(' ')[0];

    let {timeArray,priceArray}=defaultDayMovementArray();
    
    timeSeriesData.values.forEach((stockData)=>{
        let dateFromStockData =stockData.datetime;
        let dateDataFormat = dateFromStockData.split(' ')[0];
        const time = stockData.datetime;
        // console.log(time);
        // console.log('------------------------------------');
        for(var i=0; i<timeArray.length;i++){
            if(recentDateFormat==dateDataFormat){
                if(timeArray[i]==time){
                    priceArray[i]=stockData.close;
                }
            }
        }
    });
    res.json({
        time:timeArray.reverse(), 
        price:priceArray.reverse()
    });
};

exports.stockWeekMovement = async (req,res)=>{
    const stockSymbol = req.symbol;
    const stockTimeSeries = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=1000&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
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
    const stockTimeSeries = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=2500&apikey=${process.env.STOCK_DOW_JONES_12DATA}&source=docs`;
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
        date=data;
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
        date=data;
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
            if(tickerSymbol==watchListSymbol){
                return res.json({
                    inWatchList:true,
                    price:stockList.alertPrice
                });
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
    console.log(sfmkData);
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
