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
// app.use(cors());


// connect to mongodb
mongoose.connect()
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
io.on('connection', (socket) => {
    let interval=null;
    console.log('a user connected userID'+socket.userID);

    socket.on('info',({name})=>{
        console.log('message'+name);
    });

    socket.on('serverStockPrice',async ({stockSymbol})=>{
        const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
        const finnhubRes=await fetch(finnhub);
        const finnStockPriceData=await finnhubRes.json();
        console.log('price'+finnStockPriceData.c);
        socket.emit('clientStockPrice',{stockSymbol, stockPrice:finnStockPriceData.c});
    });
    socket.on('startServerStockPrice',async (stockSymbol)=>{
        // check date
        const date = new Date();
        if(date.getDate()!=0||date.getDate()!=6){
            interval = setInterval(() => {
                const newYorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
                const date = new Date(newYorkTime);
                // console.log('');
                // var d = new Date();
                const hour = date.getHours();
                const minutes = date.getMinutes();
                // console.log(d.toLocaleString('en-US', { timeZone: 'America/New_York' }));
                console.log(hour+':'+minutes);
                const time = hour+':'+minutes;
                if(minutes%1==0){
                    if(hour>9 && minutes>=30 && hour< 24 ){
                        console.log('during hours');
                        socket.emit('streamStockPriceTime',{price:5,time});
                    }
                    else{
                        socket.emit('streamStockPriceTime',{price:'nothing',time});
                    }
                }
                console.log('interval done');
                // if(minutes%2==0){
                //     socket.emit('streamStockPriceTime',{price:5,time});
                // }
              }, 10000);
        }

    });

    socket.on("disconnect", () => {
        clearInterval(interval);
    });
});
