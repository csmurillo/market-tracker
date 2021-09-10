import React from 'react';

// home styles
import './home.css';
import Plot from 'react-plotly.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

const Home = () =>{
    const dowJonesGrph = () =>(
        <div>
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
            layout={ {width: 400, height: 300, title: {
                text:'Dow Jones',
                font: {
                  family: 'Glory, sans-serif',
                  size: 24,
                  weight:12
                },
              }} }
            config = {{displayModeBar: false}}
            />
        </div>
    );

    const homeBulletin = () => (
        <div>
            <h1 className="custom-font-one">Create a Watchlist</h1>
            <ul className="f-30">
                <li>Track Stocks</li>
                <li>Search Stocks</li>
                <li>Recieve Price Alerts</li>
                <li>Much More</li>
            </ul>
        </div>
    );
    const topGainer = ()=>(
        <div>
            <h1 className="custom-font-one">Top Gainers</h1>
            <div>
                
            </div>
        </div>
    );
    const topLoser = ()=>(
        <div>
            <h1 className="custom-font-one">Top Losers</h1>
            <div>
                
            </div>
        </div>
    );

    return (
        <div className="container">
            <div id="home-content-cont" className="row">
                <div className="col-xl-6 col-lg-8 col-md-8">
                    <div className= "d-flex justify-content-center">
                        {dowJonesGrph()}
                    </div>
                </div>
                <div className=" col-xl-6 col-lg-4 col-md-4">
                    <div className= "d-flex justify-content-center">
                        {homeBulletin()}
                    </div>
                </div>
            </div>
            <div className="row">
                {topGainer()}
            </div>
            <div className="row">
                {topLoser()}
            </div>
        </div>
        
    );
};
export default Home;