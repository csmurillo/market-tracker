import { useState, useEffect } from 'react';
import { getStock, getStockPrice, getStockNews,getStockMovement,stockOnWatchList,
    getStockWeekMovement, getStockMonthMovement, getStockYearMovement, getStockFiveYearMovement
} from '../../adapters/stockApi';
import { addToWatchList, updateWatchList,deleteWatchList } from '../../adapters/watchlistApi';
import { getToken, isAuthenticated } from '../../adapters/authApi';

const StockContext = (path,socketLivePrice)=>{

    const authInfo = isAuthenticated();
    const token = getToken();

    const [inWatchList,setInWatchList]=useState(false);
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

    const [graphSize,setGraphSize]=useState();

    // use effect for graph resize
    useEffect(()=>{
        let id=authInfo._id;
        socketLivePrice.auth = { id };
        socketLivePrice.connect();
        socketLivePrice.on('updateOnWatchList',({insideWatchList})=>{
            if(!insideWatchList){
                // alert('updateOnWatchList');
                setInWatchList(insideWatchList);
                socketLivePrice.disconnect();
                // alert(insideWatchList);
                // alert('disconnected');
            }
        });

        window.addEventListener('resize',resizeGraph);
        window.onload=resizeGraph();
        return ()=>{
            window.removeEventListener('resize',resizeGraph)
        };
    },[]);
    
    const resizeGraph = ()=>{
        if(window.innerWidth>=1200){
            setGraphSize(550);
        }
        else if(window.innerWidth>=1057.7){
            setGraphSize(450);
        }
        else if(window.innerWidth>=1045){
            setGraphSize(900);
        }
        else if(window.innerWidth>=1040){
            setGraphSize(920);
        }
        else if(window.innerWidth>=990){
            setGraphSize(900);
        }
        else if(window.innerWidth>=767){
            setGraphSize(670);
        }
        else{
            setGraphSize(490);
        }
    };

    useEffect(()=>{
        const stock=path.split('/');
        const stockSymbol=stock[stock.length-1];
        setStockSymbol(stockSymbol);

        stockOnWatchList(stockSymbol,authInfo._id,token).then(watchListInfo=>{
            alert(JSON.stringify(watchListInfo));
            const tempInWatchList=watchListInfo.inWatchList;
            const tempPriceTarget=watchListInfo.price;
            if(tempInWatchList){
                setInWatchList(tempInWatchList);
            }
            if(tempPriceTarget){
                setPriceTarget(tempPriceTarget);
                setInputPriceTarget(tempPriceTarget);
            }
            // console.log(tempInWatchList+':'+inWatchList+','+tempPriceTarget+':'+priceTarget);
        });
        getStock(stockSymbol).then(stock=>{
            setStockInfo(stock);
            // console.log('Stock information'+JSON.stringify(stock));
        });
        getStockPrice(stockSymbol).then(stockPriceInfo=>{
            setStockPrice(stockPriceInfo);
            // console.log('Stock Price'+JSON.stringify(stockPriceInfo));
        });
        getStockNews(stockSymbol).then(news=>{
            // console.log(news.news.articles);
            setStockNews(news.news.articles);
        });
        getStockMovement(stockSymbol).then(stockData=>{
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[path]);

    const updateGraphValues = (stockPriceLive,stockPriceTime)=>{
        console.log(stockPriceTime);
        if(currentTimeStamp==='day'){
            const stockPriceMovementClone=[...stockPriceMovement];
            for(let i=0; i<stockPriceMovementClone.length;i++){
                if(stockPriceMovementClone[i]===null){
                    stockPriceMovementClone[i-1]=stockPriceLive;
                    setStockPriceMovement(stockPriceMovementClone);
                    break;
                }
            }
        }
    };

    const updateGraphValuesPeriodic =(stockPriceLive,stockPriceTime)=>{
        console.log(stockPriceTime);
        if(currentTimeStamp==='day'){
            // console.log('stock context '+JSON.stringify(stockPriceLive)+' stock price date format '+stockPriceTime);
            const stockPriceHour=parseInt(stockPriceTime.split(':')[0]);
            const stockPriceMinute=parseInt(stockPriceTime.split(':')[1]);
            if(stockTimeMovement){
                for(let i=0;i<stockTimeMovement.length;i++){
                    let time=stockTimeMovement[i].split(' ')[1];
                    let hour=parseInt(time.split(':')[0]);
                    let minute=parseInt(time.split(':')[1]);

                    if(stockPriceHour===hour&&stockPriceMinute>minute){
                        if(minute===55){
                            const stockPriceMovementClone=[...stockPriceMovement];
                            stockPriceMovementClone[i-1]=stockPriceLive;
                            setStockPriceMovement(stockPriceMovementClone);
                            break;
                        }else{
                            const stockPriceMovementClone=[...stockPriceMovement];
                            stockPriceMovementClone[i-1]=stockPriceLive;
                            setStockPriceMovement(stockPriceMovementClone);
                            break;
                        }
                    }
                }
            }
        }
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
            // console.log(data);
            setInputPriceTarget(priceTarget);
            
            alert('add to watchlist@@@');
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
            // console.log('~~~~~~~~~TIME~~~~~~~~~~~~');
            // console.log(stockData.time);
            // console.log('~~~~~~~~~PRICE~~~~~~~~~~~');
            // console.log(stockData.price);
            // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };

    const clickWeekHistoricData =()=>{
        setLoading(true);
        setCurrentTimeStamp('week');
        // console.log('week');
        // console.log('stock symbol'+stockSymbol);
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
        // console.log('month');
        getStockMonthMovement(stockSymbol).then((stockData)=>{
            // console.log(stockData);
            setStockTimeMovement(stockData.time);
            setStockPriceMovement(stockData.price);
            setLoading(false);
        });
    };

    const clickYearHistoricData = ()=>{
        setLoading(true);
        setCurrentTimeStamp('year');
        // console.log('year');
        getStockYearMovement(stockSymbol).then((stockData)=>{
            // console.log(stockData);
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

   return { stockSymbol,inWatchList, loading, priceTarget, inputPriceTarget, stockInfo, stockPrice, stockNews, stockTimeMovement, stockPriceMovement,currentTimeStamp,graphSize,
    setInWatchList,updateGraphValues,updateGraphValuesPeriodic,
    onSubmitAddToWatchList, onChangeAddToWatchList,
    clickDayHistoricData,clickWeekHistoricData, clickMonthHistoricData, clickYearHistoricData, clickFiveYearHistoricData, onChangeUpdatePriceTarget,updatePriceTarget,deleteStockFromWatchList};
};

export {StockContext};









