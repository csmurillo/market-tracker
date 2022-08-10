import { useState, useEffect } from 'react';
import { isAuthenticated } from '../../adapters/authApi';

const StockPriceContext = (stockSymbol,updateGraphValues,updateGraphValuesPeriodic,socket,socketLivePrice)=>{

    const authInfo = isAuthenticated();

    const [ stockPriceLive, setStockPriceLive]=useState('~');
    const [ stockChangePrice, setStockChangePrice]=useState('-x');
    const [ stockChangePricePercentage, setStockChangePricePercentage]=useState('-x');
    const [ stockPriceDateFormatLive, setStockPriceDateFormatLive]=useState('');

    useEffect(()=>{
        let id=authInfo._id;
        socketLivePrice.auth = { id };
        socketLivePrice.connect();

        socket.connect();
        socket.emit('startStreamServerStockPrice',{stockSymbol});

        socket.on('streamStockLivePrice',({price,changePrice,changePricePercentage,time})=>{
            // const formattedDate=getDateFormatted(time.split(':')[0],time.split(':')[1]);
            setStockPriceLive(price);
            setStockPriceDateFormatLive(time.split(':')[0]+':'+time.split(':')[1]);
            setStockChangePrice(changePrice);
            setStockChangePricePercentage(changePricePercentage);
        });
        socket.on('streamMod5LivePrice',({price,time})=>{
            updateGraphValues(price,time);
        });

        return ()=>{
            console.log('socket no longer listening');
            socketLivePrice.disconnect();
            socket.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
        updateGraphValuesPeriodic(stockPriceLive,stockPriceDateFormatLive);
        socketLivePrice.emit('onWatchList',{stockSymbol});
        // console.log('stockPriceLive changed*************************************************************8');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[stockPriceLive]);

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





