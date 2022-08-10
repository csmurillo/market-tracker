import React, { useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import {WatchListContext} from '../../context/WatchListContext';
import Card from './components/Card';
import socket from '../../context/Socketio';
import socketLivePrice from '../../context/SocketLivePrice';

import './styles.css';

const Watchlist = () =>{

    // useEffect(()=>{
    //     socket.connect();
    //     return ()=>{
    //         console.log('cards no longer listening');
    //         socket.disconnect();
    //     };
    // },[]);

    const { watchList, livePrices,livesPricesLoaded, cardUpdate, cardDelete } = WatchListContext(socket,socketLivePrice);
    return (
        <MainLayout>
            <div className="card-container row">
                {
                    watchList&&livesPricesLoaded&&watchList.map((stocks,i)=>(
                        <div key={i} class="col-lg-4 col-md-6 col-6 mb-4 d-flex justify-content-center">
                            {/* <div>{i} {JSON.stringify(livePrices[i])}</div> */}
                            <Card stock={stocks} stockName={stocks.tickerName} stockSymbol={stocks.tickerSymbol} stockPrice={livePrices[i].livePrice}
                                priceTarget={stocks.alertPrice} priceDirection={stocks.alertDirection} stockPriceTargetReached={stocks.priceTargetReached}
                                stockPriceTargetReachedDate={stocks.datePriceTargetReached} cardUpdate={cardUpdate} cardDelete={cardDelete}>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </MainLayout>
    );
};

export default Watchlist;







