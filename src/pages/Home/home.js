import React, {useEffect, useState} from 'react';

import logo from '../../assets/images/stock-tracker-logos.png';
// home styles
import './home.css';
import Plot from 'react-plotly.js';
import Card from '../../components/Card/Card';

import MainLayout from '../../layout/MainLayout';
import { dowJones, topGainer, topLoser } from '../../adapters/stockApi';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = () =>{
    const [ topGainers, setTopGainers ]=useState();
    const [ topLosers, setTopLosers ]=useState(null);

    useEffect(()=>{
        dowJones().then(data=>{
            console.log('data~');
            console.log(data);
        });
        topGainer().then(gainers=>{
            const mostGainStocks=gainers.gainers.gainers.mostGainerStock;
            console.log('gainer~');
            // console.log(gainers.gainers.gainers.mostGainerStock);
            // console.log(mostGainStocks);
            mostGainStocks.map((ele)=>{
                console.log(ele);
            });
            // console.log('~!@');
            console.log(mostGainStocks[0].ticker);
            setTopGainers(mostGainStocks);
        });
      
    },[]);
    const dowJonesGrph = () =>(
        <div id="dow-graph-container">
            <div id="dow-graph">
                <Plot
                data={[
                    {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'lightgreen'},
                    }
                ]}
                layout={ {width: 520, height: 380, title: {
                    text:'Dow Jones',
                    font: {
                    family: 'Glory, sans-serif',
                    size: 36,
                    color: 'black'
                    },
                }} }
                config = {{displayModeBar: false}}
                />
            </div>
        </div>
    );

    const homeBulletin = () => (
        <div id="home-bulletin-container">
            <h1 className="custom-font-one">Create a Watchlist</h1>
            <ul className="f-30">
                <li>Track Stocks</li>
                <li>Search Stocks</li>
                <li>Recieve Price Alerts</li>
                <li>Much More</li>
            </ul>
        </div>
    );

    const topGainerContainer = ()=>(
        <div id="top-gainer-container">
            <h1 className="custom-font-two">Top Gainers</h1>
            <div id="top-gainers" className="row">
                <div className="col-12">
                    <Carousel emulateTouch showIndicators infiniteLoop>
                        {
                            topGainers && topGainers.map((gainer,i)=>(
                                // <div>{element.ticker}</div>
                                
                                <div key={i} className="col-lg-2 col-md-3 col-6 d-flex justify-content-center mb-4">
                                    <Card companyName={gainer.companyName} tickerSymbol={gainer.ticker} priceChange={gainer.changesPercentage} currentPrice={gainer.price} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                {/* {topGainers} */}
            </div>
        </div>
    );
    const topLoserContainer = ()=>(
        <div id="top-loser-container">
            <h1 className="custom-font-two">Top Losers</h1>
            <div id="top-losers" className="row">
            <div className="col-12">
                <Carousel emulateTouch showIndicators infiniteLoop>
                        {
                            topGainers && topGainers.map((gainer,i)=>(
                                // <div>{element.ticker}</div>
                                
                                <div key={i} className="col-lg-2 col-md-3 col-6 d-flex justify-content-center mb-4">
                                    <Card companyName={gainer.companyName} tickerSymbol={gainer.ticker} priceChange={gainer.changesPercentage} currentPrice={gainer.price} />
                                </div>
                            ))
                        }
                    </Carousel>
            </div>
                {/* {topGainers} */}
            </div>
        </div>
    );

    return (
        <MainLayout>
            <div id="home-content-conter" className="row">
                <div className="col-xl-6 col-lg-8 col-md-8">
                    <div className= "d-flex justify-content-center">
                        {dowJonesGrph()}
                    </div>
                </div>
                <div className=" col-xl-6 col-lg-4 col-md-4">
                    <div className= "d-flex flex-column justify-content-center">
                        <div className="d-md-flex d-none">
                            {homeBulletin()}
                        </div>
                        <div className="d-md-none">
                            <h1 className="custom-font-one">Create a Watchlist</h1>
                            <Carousel emulateTouch showIndicators showArrows infiniteLoop>
                                <div>
                                    <div style={{height:'100%', fontSize:'32px'}}>Track Stocks</div>
                                </div>
                                <div>
                                    <div style={{height:'100%', fontSize:'32px'}}>Search Stocks</div>
                                </div>
                                <div>
                                    <div style={{height:'100%', fontSize:'32px'}}>Recieve Price Alerts</div>
                                </div>
                                <div>
                                    <div style={{height:'100%', fontSize:'32px'}}>Much More</div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    {/* <div className="row"> */}
                        {topGainerContainer()}
                    {/* </div> */}
                </div>
                <div className="col-12">
                    {/* <div className="row"> */}
                        {topLoserContainer()}
                    {/* </div> */}
                </div>
            </div>
        </MainLayout>
    );
};
export default Home;