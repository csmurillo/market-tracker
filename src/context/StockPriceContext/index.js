import { useState, useEffect } from 'react';
import socket from '../Socketio';

const StockPriceContext = ()=>{

    const [ stockPriceLive, setStockPriceLive]=useState({});
    const [ stockPriceDateFormatLive, setStockPriceDateFormatLive]=useState('');
    useEffect(()=>{
        const interval = setInterval(() => {
            console.log('Logs every second');
            var d = new Date();
            const min=d.getMinutes();
            // if(min%2==0){
            //     console.log('min'+min);
            //     socket.emit('serverStockPrice',{stockSymbol:'BB'});
            // }
          }, 40000);

        socket.on('clientStockPrice',({stockSymbol,stockPrice})=>{
            console.log('stock symbol'+stockSymbol+'stock price:'+stockPrice);
            setStockPriceLive({
                stockSymbol,
                stockPrice
            });
            setStockPriceDateFormatLive(getDateFormatted());
        });
        return () => clearInterval(interval);
    },[]);

    const getDateFormatted = ()=>{
        var dateFormatted='';
        var d = new Date();
        dateFormatted= (d.getMonth()+1)+' '+ d.getDate()+', '+d.getFullYear()+', '+d.getHours()+':'+d.getMinutes();
        return dateFormatted;
    }

    const updateGraphStockPrice =(currentTimeStamp,updateStockPriceMovement,updateStockTimeMovement)=>{
        updateStockPriceMovement('time');
        updateStockTimeMovement('price');
    };


   return { stockPriceLive, stockPriceDateFormatLive, updateGraphStockPrice };
};

export { StockPriceContext };





