import { useState, useEffect } from 'react';
import { getWatchList,updateWatchList,deleteWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';
import { getStockHistory } from '../../adapters/userApi';

const WatchListContext = (filterBtn,socket,socketLivePrice) => {

    const authInfo = isAuthenticated();
    const token = getToken();

    const [watchList,setWatchList]=useState(null);
    const [historicWatchList,setHistoricWatchList]=useState([]);


    const [initWatchlist,setInitWatchList]=useState(false);
    const [updateList,setUpdateList]=useState(false);

    const [livePrices,setLivePrices]=useState([]);
    const [livesPricesLoaded,setLivesPricesLoaded]=useState(false);

    const [socketsSet,setSocketsSet]=useState(false);

    // init watchlist
    useEffect(()=>{
        getWatchList(authInfo._id,token).then(watchList=>{
            setWatchList(watchList.watchList);
            setInitWatchList(true);
            // alert('watchlist set');
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
        if(updateList){
            socketLivePrice.disconnect();
            socket.disconnect();
            setInitWatchList(true);
            // alert('WATCHLIST UPDATED SET'+JSON.stringify(watchList)+' AND initwatchlist is: '+initWatchlist);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[updateList]);

    // init livePrices
    useEffect(()=>{
        if(initWatchlist){
            if(watchList!=null){
                let newLivePrices=[];
                watchList.map((stocks)=>{
                    newLivePrices.push({
                        stockSymbol:stocks.tickerSymbol,
                        livePrice:'~'
                    });
                    return stocks;
                });
                setLivePrices(newLivePrices);
                setLivesPricesLoaded(true);
                // alert('init live prices');
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[initWatchlist])

    // init socket
    useEffect(()=>{
        if(livesPricesLoaded){
            // alert('liveprices loaded');
            // socketlivePrice
            let id=authInfo._id;
            socketLivePrice.auth = { id };
            socketLivePrice.connect();

            socket.auth = { id };
            socket.connect();
            socket.emit('serverWatchlistPriceSteam',{stocks:livePrices});
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
                socketLivePrice.emit('checkLivePrices',{});
            });
            // alert('sockets set except updatewatchlistliveprice');
            setSocketsSet(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[livesPricesLoaded]);

    useEffect(()=>{
        if(socketsSet){
            socketLivePrice.on('updateWatchlistLivePrice',({liveWatchList})=>{
                if(JSON.stringify(liveWatchList)!==JSON.stringify(watchList)){
                    // alert('comparing livewatchlist: '+JSON.stringify(liveWatchList)+' and watchlist: '+JSON.stringify(watchList));
                    socketLivePrice.disconnect();
                    socketLivePrice.removeAllListeners();
                    socket.disconnect();
                    // alert('sockets all disconnected:livepricereached'+JSON.stringify(liveWatchList));
                    setInitWatchList(false);
                    setLivesPricesLoaded(false);
                    setSocketsSet(false);
                    setWatchList(liveWatchList);
                    setUpdateList(true);
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[socketsSet]);
    

    // init sockets
    useEffect(()=>{
        return ()=>{
            socket.disconnect();
            socketLivePrice.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const filterUpdate = (filter)=>{
        if(filter==="showActive"){
            filterBtn.current.innerHTML='Show Active';
            setHistoricWatchList([]);
        }
        else if(filter==="showAll"){
            filterBtn.current.innerHTML='Show All';
            getStockHistory(authInfo._id,token).then((res)=>{
                const {stocks}=res;
                setHistoricWatchList(stocks);
            });
        }
    };

    const cardUpdate=(stockTicker,cardPriceTarget)=>{
        updateWatchList(authInfo._id,token,{symbol:stockTicker,priceAlert:cardPriceTarget}).then(listUpdated=>{
            setWatchList(watchList.map((stocks,i)=>{
                if(stockTicker===stocks.tickerSymbol){
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

   return { watchList,historicWatchList,livePrices,livesPricesLoaded,filterUpdate,cardUpdate, cardDelete };
};

export { WatchListContext };












