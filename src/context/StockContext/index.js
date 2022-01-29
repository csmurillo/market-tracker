import { useState, useEffect } from 'react';
import { getStock, getStockPrice, getStockNews } from '../../adapters/stockApi';


const StockContext = (path)=>{

    const [stockInfo,setStockInfo]=useState({});
    const [stockPrice,setStockPrice]=useState('');
    const [stockNews, setStockNews]=useState([]);

    useEffect(()=>{
        const stock=path.split('/');
        const stockSymbol=stock[stock.length-1];

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
    },[]);

   return { stockInfo, stockPrice, stockNews };
};

export {StockContext};
