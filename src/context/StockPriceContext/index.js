import { useState, useEffect } from 'react';
// import socket from '../Socketio';

const StockPriceContext = (stockSymbol,socket)=>{

    const [ stockPriceLive, setStockPriceLive]=useState('~');
    const [ stockChangePrice, setStockChangePrice]=useState('-x');
    const [ stockChangePricePercentage, setStockChangePricePercentage]=useState('-x');
    const [ stockPriceDateFormatLive, setStockPriceDateFormatLive]=useState('');
    useEffect(()=>{
        console.log('stockSymbol'+stockSymbol);
        console.log('-----------------------');
        socket.connect();
        console.log('socket connected');
        socket.emit('startStreamServerStockPrice',{stockSymbol});
        // const interval = setInterval(() => {
        //     console.log('Logs every second');
        //     var d = new Date();
        //     const min=d.getMinutes();
        //     if(min%5===0){
        //         console.log('---------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        //         console.log('min'+min);
        //         socket.emit('serverStockPrice',{stockSymbol:'BB'});
        //     }
        //   }, 40000);

        socket.on('streamStockLivePrice',({price,changePrice,changePricePercentage,time})=>{
            console.log('streamstockliveprice Price'+price+'DateTime:'+time);
            const formattedDate=getDateFormatted(time.split(':')[0],time.split(':')[1]);
            setStockPriceLive(price);
            setStockPriceDateFormatLive(formattedDate);
            setStockChangePrice(changePrice);
            setStockChangePricePercentage(changePricePercentage);
        });
        // socket.on('clientStockPrice',({stockSymbol,stockPrice})=>{
        //     console.log('stock symbol'+stockSymbol+'stock price:'+stockPrice);
        //     setStockPriceLive({
        //         stockSymbol,
        //         stockPrice
        //     });
        //     setStockPriceDateFormatLive(getDateFormatted());
        // });
        // return () => clearInterval(interval);
        return ()=>{
            console.log('socket no longer listening');
            socket.disconnect();
        };
    },[]);

    const getDateFormatted = (hour,min)=>{
        var dateFormatted='';
        var d = new Date();
        dateFormatted= (d.getMonth()+1)+' '+ d.getDate()+', '+d.getFullYear()+', '+hour+':'+min;
        return dateFormatted;
    }

    const updateGraphStockPrice =(currentTimeStamp,updateStockPriceMovement,updateStockTimeMovement)=>{
        updateStockPriceMovement('time');
        updateStockTimeMovement('price');
    };


   return { stockPriceLive,stockChangePrice,stockChangePricePercentage, stockPriceDateFormatLive, updateGraphStockPrice };
};

export { StockPriceContext };





