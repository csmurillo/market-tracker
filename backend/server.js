const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
var cors = require('cors');
const fetch = require('node-fetch');

const expressValidator = require('express-validator');

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const watchListRoutes = require('./routes/watchList');

const app = express();

const server = http.createServer(app);

// const io = socketio(server);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

app.use(expressValidator());
app.use(express.json());
app.use(cors({origin: '*'}));

// connect to mongodb
mongoose.connect('mongodb+srv://green:fg4Cn4oIbZ9GfV3a@cluster0.7fyco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(()=>{console.log('db connected');})
        .catch(()=>{console.log('error db');});


app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', watchListRoutes);

const port = process.env.PORT || 3000;

server.listen(port, ()=>{
    console.log(`port is ${port}`);
});

// set socketio stream
io.on('connection', async(socket) => {
    const getStockPricePromise = async(stockSymbol)=>{
        const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
        const finnhubRes=await fetch(finnhub);
        const pricePromise=await finnhubRes.json();
        return pricePromise;
    };
    const setTimer= (stockSymbol)=>{
        return setTimeout(async() => {
            if(!stopTimer){
                const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
                const newYorkTime = new Date(newYorkDate);
                // for debugging purposes
                // const newYorkTime = new Date();
                const hour = newYorkTime.getHours();
                const minutes = newYorkTime.getMinutes();
                console.log(hour+':'+minutes);
                const time = hour+':'+minutes;
                const pricePromise = await getStockPricePromise(stockSymbol);
                const stockPrice = pricePromise.c;
                if(minutes%5==0){
                    socket.emit('streamStockPriceTime',{price:stockPrice,time});
                }
                setTimer(stockSymbol);
            }
          },2000);
    };

    ///////////////////////////////////////////////////////////////////////
    let timer=null;
    let stopTimer=false;
    console.log('a user connected userID'+socket.userID);
    socket.on('serverWatchlistPriceSteam',({stocks})=>{
        console.log('sssssssssssssssssssssssssssssssssssss');
        console.log(stocks);
    });
    socket.on('serverStockPrice',async ({stockSymbol})=>{
        const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
        const finnhubRes=await fetch(finnhub);
        const finnStockPriceData=await finnhubRes.json();
        console.log('price'+finnStockPriceData.c);
        socket.emit('clientStockPrice',{stockSymbol, stockPrice:finnStockPriceData.c});
    });
    socket.on('startStreamServerStockPrice',({stockSymbol})=>{
        // for debuggin purposes
        // console.log('stock symbol'+stockSymbol);
        // check date
        const date = new Date();
        // New York Time
        const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        const newYorkTime = new Date(newYorkDate);
        let hour = newYorkTime.getHours();
        let minutes = newYorkTime.getMinutes();

        if(date.getDate()!=0||date.getDate()!=6){
            // for debuggin purposes
            // timer = setTimer(stockSymbol);
            if(hour >= 9 && hour <= 16 ){
                // special case under 9:30 o'clock & everything over 4pm
                if((hour==9&&minutes<30)||(hour==16&&minutes>=0)){
                    console.log('not valid');
                }
                else{
                    timer = setTimer(stockSymbol);
                }
            }
            else{
                console.log('too late');
            }
        }
    });
    socket.on("disconnect", () => {
        stopTimer=true;
        clearTimeout(timer);
    });
});

