import { useState, useEffect } from 'react';
import { getWatchList,updateWatchList,deleteWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const WatchListContext = (socket,socketLivePrice)=>{

    const authInfo = isAuthenticated();
    const token = getToken();

    const [watchList,setWatchList]=useState(null);
    const [livePrices,setLivePrices]=useState([]);
    const [livesPricesLoaded,setLivesPricesLoaded]=useState(false);

    useEffect(()=>{
        let id=authInfo._id;
        socketLivePrice.auth = { id };
        socketLivePrice.connect();
        socket.connect();
        socket.on('serverWatchlistLivePriceStream',({stocks})=>{
            let newLivePrices=[];
            stocks.map((stocks)=>{
                newLivePrices.push({
                    stockSymbol:stocks.stockSymbol,
                    livePrice:stocks.livePrice
                });
                return stocks;
            });
            setLivePrices(newLivePrices);
        });
        
        return ()=>{
            console.log('cards no longer listening');
            socket.disconnect();
        };
    },[]);

    useEffect(()=>{
        getWatchList(authInfo._id,token).then(watchList=>{
            // alert(JSON.stringify(watchList.watchList));
            // console.log(watchList.watchList);
            setWatchList(watchList.watchList);
        });
    },[]);
    
    useEffect(()=>{
        // console.log('livepricechanged!!'+livePrices.length);
        if(livesPricesLoaded){
            // console.log('emittted!!');
            // alert('live prices loaded:TRUE');
            // alert(JSON.stringify(livePrices));
            socket.emit('serverWatchlistPriceSteam',{stocks:livePrices});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[livesPricesLoaded]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[watchList]);

    useEffect(()=>{
        socketLivePrice.emit('checkLivePrices',{});
        // alert(JSON.stringify(livePrices));
        if(watchList!=null){
            // alert(JSON.stringify(watchList));
        }
        if(watchList!=null){
            socketLivePrice.on('updateWatchlistLivePrice',({liveWatchList})=>{
                if(JSON.stringify(liveWatchList)!==JSON.stringify(watchList)){
                    // alert('liveinside!'+JSON.stringify(liveWatchList));
                    // alert('watchlist'+JSON.stringify(watchList));
                    setWatchList(liveWatchList);
                }
                else{
                    // alert('liveinsideSWAG!!!'+JSON.stringify(liveWatchList));
                    // alert('watchlistSWAG!!!'+JSON.stringify(watchList));
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[livePrices]);

    const cardUpdate=(stockTicker,cardPriceTarget)=>{
        updateWatchList(authInfo._id,token,{symbol:stockTicker,priceAlert:cardPriceTarget}).then(listUpdated=>{
            console.log(listUpdated);
            setWatchList(watchList.map((stocks,i)=>{
                if(stockTicker===stocks.tickerSymbol){
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












