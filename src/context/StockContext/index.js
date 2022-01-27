import { useState, useEffect } from 'react';
import { getStock, getStockPrice, getStockNews } from '../../adapters/stockApi';


const StockContext = (path)=>{

    // const [stockSymbol,setStockSymbol]=useState('');
    const [stockNews, setStockNews]=useState([]);

    useEffect(()=>{
        const stock=path.split('/');
        // setStockSymbol(stock[stock.length-1]);
        const stockSymbol=stock[stock.length-1];
        getStock(stockSymbol).then(stock=>{
            console.log(stock+'JSON'+JSON.stringify(stock));
        });
        getStockPrice(stockSymbol).then(stockPriceInfo=>{
            console.log('stockpriceinfo'+JSON.stringify(stockPriceInfo));
        });
        getStockNews('blackberry').then(news=>{
            setStockNews(news.news.articles);
            console.log(typeof news.news.articles);
            console.log('-----------------------');
            console.log(news.news.articles);
            console.log('-----------------------');
            // news.news.articles.map(articles=>{
            //     console.log(articles)
            // });
        });
    },[]);

   return { stockNews };
};

export {StockContext};
