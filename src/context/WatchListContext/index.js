import { useState, useEffect } from 'react';
import { getWatchList,updateWatchList,deleteWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const WatchListContext = ()=>{

    const authInfo = isAuthenticated();
    const token = getToken();

    const [watchList,setWatchList]=useState(null);

    useEffect(()=>{
        getWatchList(authInfo._id,token).then(watchList=>{
            console.log(watchList.watchList);
            setWatchList(watchList.watchList);
        });
    },[]);

    useEffect(()=>{
        
        
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

   return { watchList,cardUpdate, cardDelete };
};

export { WatchListContext };






