import { useState, useEffect } from 'react';
import { getWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const WatchListContext = ()=>{

    const authInfo = isAuthenticated();
    const token = getToken();

    const [watchList,setWatchList]=useState();

    useEffect(()=>{
        getWatchList(authInfo._id,token).then(watchList=>{
            // console.log('-------------------');
            // console.log('watchlist'+JSON.stringify(watchList));
            // console.log('-------------------');
            setWatchList(watchList);
            // data format
            // watchlist{"watchList":[{"_id":"61fb82f8a9c24e02705e7723","tickerName":"BlackBerry Limited","tickerSymbol":"BB","alertPrice":10},
            // {"_id":"61fb8394a9c24e02705e772e","tickerName":"China Southern Airlines Company Limited","tickerSymbol":"ZNH","alertPrice":10}]}
        });
    },[]);

   return { watchList };
};

export { WatchListContext };


