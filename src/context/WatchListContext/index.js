import { useState, useEffect } from 'react';
import { getWatchList,updateWatchList,deleteWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const WatchListContext = ()=>{

    const authInfo = isAuthenticated();
    const token = getToken();

    const [watchList,setWatchList]=useState(null);
    const [livePrices,setLivePrices]=useState([]);
    const [livesPricesLoaded,setLivesPricesLoaded]=useState(false);

    useEffect(()=>{
        getWatchList(authInfo._id,token).then(watchList=>{
            console.log(watchList.watchList);
            setWatchList(watchList.watchList);
        });
    },[]);

    useEffect(()=>{
        if(watchList!=null){
            console.log('watchlist now has content');
            console.log(watchList);
            // set livePrices
            watchList.map((stocks)=>{
                livePrices.push({
                    stockSymbol:stocks.tickerSymbol,
                    livePrice:'~'
                });
                setLivePrices(livePrices);
            });
            console.log('live prices');
            console.log(livePrices);
            setLivesPricesLoaded(true);
        }
    },[watchList]);

    const cardUpdate=(stockTicker,cardPriceTarget)=>{
        updateWatchList(authInfo._id,token,{symbol:stockTicker,priceAlert:cardPriceTarget}).then(listUpdated=>{
            console.log(listUpdated);
            setWatchList(watchList.map((stocks,i)=>{
                if(stockTicker==stocks.tickerSymbol){
                    // console.log(stocks.tickerSymbol+'to be changed to '+cardPriceTarget);
                    stocks.alertPrice=cardPriceTarget;
                    return stocks;
                }
                return stocks;
            }));
        });
    };

    const cardDelete = (tickerSymbol)=>{
        deleteWatchList(authInfo._id,token,{symbol:tickerSymbol}).then(newWatchList=>{
            setWatchList(watchList.filter((stocks,i)=>{
                return tickerSymbol!==stocks.tickerSymbol;
            }));
        });
    };

   return { watchList,livePrices,livesPricesLoaded,cardUpdate, cardDelete };
};

export { WatchListContext };







