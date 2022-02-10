import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {WatchListContext} from '../../context/WatchListContext';
import Card from './components/Card';

import './styles.css';

const Watchlist = () =>{
    const { watchList, cardUpdate, cardDelete } = WatchListContext();
    return (
        <MainLayout>
            <div className="card-container row">
                {
                    watchList&&watchList.map((stocks,i)=>(
                        <div class="col-lg-4 col-md-6 col-6 mb-4 d-flex justify-content-center">
                            <Card stockName={stocks.tickerName} stockTicker={stocks.tickerSymbol}
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







