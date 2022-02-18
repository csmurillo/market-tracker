import React, { useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import {WatchListContext} from '../../context/WatchListContext';
import Card from './components/Card';
import socket from '../../context/Socketio';

import './styles.css';

const Watchlist = () =>{

    useEffect(()=>{
        socket.connect();
        return ()=>{
            console.log('cards no longer listening');
            socket.disconnect();
        };
    },[]);

    const { watchList, cardUpdate, cardDelete } = WatchListContext();
    return (
        <MainLayout>
            <div className="card-container row">
                {
                    watchList&&watchList.map((stocks,i)=>(
                        <div class="col-lg-4 col-md-6 col-6 mb-4 d-flex justify-content-center">
                            <Card socket={socket} stockName={stocks.tickerName} stockSymbol={stocks.tickerSymbol}
                                priceTarget={stocks.alertPrice} cardUpdate={cardUpdate} cardDelete={cardDelete}>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </MainLayout>
    );
};

export default Watchlist;







