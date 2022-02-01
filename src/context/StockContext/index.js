import { useState, useEffect } from 'react';
import { getStock, getStockPrice, getStockNews,getStockMovement,stockOnWatchList } from '../../adapters/stockApi';
import { addToWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const StockContext = (path)=>{

    const authInfo = isAuthenticated();
    const token = getToken();

    const [stockInfo,setStockInfo]=useState({});
    const [stockPrice,setStockPrice]=useState('');
    const [stockNews, setStockNews]=useState([]);
    const [stockTimeMovement, setStockTimeMovement]=useState({});
    const [stockPriceMovement, setStockPriceMovement]=useState({});

    useEffect(()=>{
        const stock=path.split('/');
        const stockSymbol=stock[stock.length-1];

        // stockOnWatchList(stockSymbol,authInfo._id,token).then(watchListInfo=>{
        //     console.log('--------------------------');
        //     console.log('watchlist'+watchListInfo.inWatchList);
        //     console.log('--------------------------');
        // });

        getStock(stockSymbol).then(stock=>{
            setStockInfo(stock);
            console.log('Stock information'+JSON.stringify(stock));
        });
        getStockPrice(stockSymbol).then(stockPriceInfo=>{
            setStockPrice(stockPriceInfo);
            console.log('Stock Price'+JSON.stringify(stockPriceInfo));
        });
        getStockNews(stockSymbol).then(news=>{
            console.log(news.news.articles);
            setStockNews(news.news.articles);
        });
        getStockMovement(stockSymbol).then(stockData=>{
            console.log(stockData.time);
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            
            // setStockMovementData(stockData);
        });
    },[]);

    const clickAddToWatchList = ()=>{
        addToWatchList({stockName:stockInfo.stockName,stockSymbol:stockPrice.stock,priceAlert:10},authInfo._id,token).then(data=>{
            console.log(data);
        });
    };

   return { stockInfo, stockPrice, stockNews, stockTimeMovement, stockPriceMovement, clickAddToWatchList };
};

export {StockContext};
