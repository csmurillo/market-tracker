import { useState, useEffect } from 'react';
import { getStock, getStockPrice, getStockNews,getStockMovement,stockOnWatchList,
    getStockWeekMovement, getStockMonthMovement, getStockYearMovement, getStockFiveYearMovement
} from '../../adapters/stockApi';
import { addToWatchList, updateWatchList,deleteWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const StockContext = (path)=>{

    const authInfo = isAuthenticated();
    const token = getToken();


    const [inWatchList,setInWatchList]=useState('');
    const [priceTarget,setPriceTarget]=useState(0);
    const [inputPriceTarget, setInputPriceTarget]=useState(0);
    const [loading,setLoading]=useState(false);

    const [currentTimeStamp,setCurrentTimeStamp]=useState('day');
    const [stockSymbol,setStockSymbol]=useState('');
    const [stockInfo,setStockInfo]=useState({});
    const [stockPrice,setStockPrice]=useState('');
    const [stockNews, setStockNews]=useState([]);
    const [stockTimeMovement, setStockTimeMovement]=useState();
    const [stockPriceMovement, setStockPriceMovement]=useState();

    useEffect(()=>{
        const stock=path.split('/');
        const stockSymbol=stock[stock.length-1];
        setStockSymbol(stockSymbol);

        stockOnWatchList(stockSymbol,authInfo._id,token).then(watchListInfo=>{
            const tempInWatchList=watchListInfo.inWatchList;
            const tempPriceTarget=watchListInfo.price;
            if(tempInWatchList){
                setInWatchList(tempInWatchList);
            }
            if(tempPriceTarget){
                setPriceTarget(tempPriceTarget);
                setInputPriceTarget(tempPriceTarget);
            }
            console.log(tempInWatchList+':'+inWatchList+','+tempPriceTarget+':'+priceTarget);
            // console.log('--------------------------');
            // console.log('watchlist'+watchListInfo.inWatchList);
            // console.log('--------------------------');
        });
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
            // console.log(JSON.stringify(stockData)+'!!!!!!!!!!!!!!!!!!!!!!!!!!');
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
        });
    },[]);
    const updateGraphValues =(stockPriceLive,stockPriceDateFormatLive)=>{
        console.log('stock context '+JSON.stringify(stockPriceLive)+' stock price date format '+stockPriceDateFormatLive);
    };
    const updateStockTimeMovement = (time)=>{
        // stockTimeMovement.push(time);
        console.log(stockTimeMovement);
        // setStockTimeMovement(stockTimeMovement);
    };
    const updateStockPriceMovement = (price)=>{
        // stockPriceMovement.push(price);
        console.log(stockPriceMovement);
        // setStockPriceMovement(stockPriceMovement);
    };

    const deleteStockFromWatchList = ()=>{
        deleteWatchList(authInfo._id,token,{symbol:stockSymbol}).then(newWatchList=>{
            setInWatchList(false);
        });
    };
    const updatePriceTarget = (e)=>{
        e.target.parentNode.parentNode.class='dropdown-menu dropdown-menu-right';
        console.log(e.target.parentNode.parentNode.class);
        console.log('price target will be updated');
        e.preventDefault();
        updateWatchList(authInfo._id,token,{symbol:stockSymbol,priceAlert:inputPriceTarget}).then(watchList=>{
            console.log(watchList);
            setPriceTarget(inputPriceTarget);
        });
    };
    const onChangeUpdatePriceTarget = (e)=>{
        console.log('onchange '+e.target.value);
        setInputPriceTarget(e.target.value);
    };
    const onSubmitAddToWatchList=(e)=>{
        e.preventDefault();
        addToWatchList({stockName:stockInfo.stockName,stockSymbol:stockSymbol,priceAlert:priceTarget},authInfo._id,token).then(data=>{
            console.log(data);
            setInputPriceTarget();
            setInWatchList(true);
        });
    };
    const onChangeAddToWatchList = (e)=>{
        setPriceTarget(e.target.value);
    };

    const clickDayHistoricData = ()=>{
        setLoading(true);
        setCurrentTimeStamp('day');
        getStockMovement(stockSymbol).then(stockData=>{
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };
    const clickWeekHistoricData =()=>{
        setLoading(true);
        setCurrentTimeStamp('week');
        console.log('week');
        getStockWeekMovement(stockSymbol).then((stockData)=>{
            console.log(stockData);
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };
    const clickMonthHistoricData = ()=>{
        setLoading(true);
        setCurrentTimeStamp('month');
        console.log('month');
        getStockMonthMovement(stockSymbol).then((stockData)=>{
            console.log(stockData);
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };

    const clickYearHistoricData = ()=>{
        setLoading(true);
        setCurrentTimeStamp('year');
        console.log('year');
        getStockYearMovement(stockSymbol).then((stockData)=>{
            console.log(stockData);
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };

    const clickFiveYearHistoricData = ()=>{
        setLoading(true);
        setCurrentTimeStamp('fiveYear');
        console.log('5year');
        getStockFiveYearMovement(stockSymbol).then((stockData)=>{
            console.log(stockData);
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };

   return { stockSymbol,inWatchList, loading, priceTarget, inputPriceTarget, stockInfo, stockPrice, stockNews, stockTimeMovement, stockPriceMovement,currentTimeStamp,
    updateGraphValues,
    onSubmitAddToWatchList, onChangeAddToWatchList,
    clickDayHistoricData,clickWeekHistoricData, clickMonthHistoricData, clickYearHistoricData, clickFiveYearHistoricData, onChangeUpdatePriceTarget,updatePriceTarget,deleteStockFromWatchList};
};

export {StockContext};









