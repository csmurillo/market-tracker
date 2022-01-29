import React from 'react';
import Plot from 'react-plotly.js';
import MainLayout from '../../layout/MainLayout';
import Button from '../../components/Button';
import { withRouter } from "react-router-dom";
import { StockContext } from '../../context/StockContext';
import './styles.css';

const Stock = ({history}) =>{
    const { stockInfo:{stockName,marketCap,volume,averageVolume,fiftytwoWeekHigh,fiftytwoWeekLow,openPrice},
            stockPrice:{stock,currentPrice,dollarPriceChange,percentPriceChange},
            stockNews }=StockContext(history.location.pathname);
    return (
        <MainLayout>
            <div id="stock">
                <div id="stock-symbol-information">
                    <div id="stock-symbol-header">
                        <div id="stock-symbol">
                            <div id="stock-name">{stockName} ({stock}) </div>
                            <div className='d-flex'>
                                <div id="stock-price">${currentPrice}</div>
                                <div id="stock-change">{dollarPriceChange} ({percentPriceChange})</div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <div id="stock-symbol-add-to-watchlist-button" data-toggle="dropdown">
                                <Button className='btn' styles={{fontSize:'20px',width:'150px',borderRadius:'15px',backgroundColor:'rgb(138, 233, 138)', color:'white'}}>WatchList +</Button>
                            </div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropDownMenu">
                                <div>hello</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id="stock-symbol-graph">
                            <div id="graph-container">
                                <Plot
                                    data={[
                                        {
                                        x: [1, 2, 3,100,200],
                                        y: [2, 6, 3,100,150],
                                        type: 'scatter',
                                        mode: 'lines+markers',
                                        marker: {color: 'lightgreen'},
                                        }
                                    ]}
                                    layout={ 
                                        {width: 550, height:250,margin: {
                                        l: 30,
                                        r: 10,
                                        b: 30,
                                        t: 10,
                                        pad: 4},
                                        yaxis: {fixedrange: true},
                                        xaxis : {fixedrange: true}
                                    }}
                                    
                                    config = {{displayModeBar: false}}
                                    />
                            </div>
                        </div>
                        <div id="stock-symbol-timestamps">
                            <Button className='btn active' styles={{height:'45px',backgroundColor:'lightgreen',color:'white',marginRight:'5px'}}>1h</Button>
                            <Button className='btn' styles={{height:'45px',backgroundColor:'lightgreen',color:'white',marginRight:'5px'}}>1w</Button>
                            <Button className='btn' styles={{height:'45px',backgroundColor:'lightgreen',color:'white',marginRight:'5px'}}>1m</Button>
                            <Button className='btn' styles={{height:'45px',backgroundColor:'lightgreen',color:'white',marginRight:'5px'}}>1y</Button>
                            <Button className='btn' styles={{height:'45px',backgroundColor:'lightgreen',color:'white',marginRight:'5px'}}>5y</Button>
                        </div>
                    </div>
                    <div id="stock-information-container">
                            <div class="stock-info" id="stock-info-marketCap">
                                <h2>Market Cap</h2>
                                <div>{marketCap}</div>
                            </div>
                            <div class="stock-info" id="stock-info-volume">
                                <h2>Volume</h2>
                                <div>{volume}</div>
                            </div>
                            <div class="stock-info" id="stock-info-avg-volume">
                                <h2>Avg Volume</h2>
                                <div>{averageVolume}</div>
                            </div>
                            <div class="stock-info" id="stock-52-week-high">
                                <h2>52 Week High</h2>
                                <div>{fiftytwoWeekHigh}</div>
                            </div>
                            <div class="stock-info" id="stock-52-week-low">
                                <h2>52 Week Low</h2>
                                <div>{fiftytwoWeekLow}</div>
                            </div>
                            <div class="stock-info" id="stock-open-price">
                                <h2>Open Price</h2>
                                <div>{openPrice}</div>
                            </div>
                    </div>
                </div>
                <div id="stock-symbol-news">
                    <div id="stock-news-title" className='d-flex justify-content-center'>
                        <h1>Stock News</h1>
                    </div>
                    <div id="stock-news">
                        {
                            stockNews.map((newsInfo,i)=>(
                                <a target="_blank" href={newsInfo.url}>
                                    <div class="news-row">
                                        <div class="news-content">
                                            <div class="news-img">
                                                <img style={{width:'100%',height:'100%'}} src={newsInfo.urlToImage}/>
                                            </div>
                                            <div class="news-info">
                                                <div class="news-title">
                                                    <p>{newsInfo.title}</p>
                                                </div>
                                                <div class="news-description text-truncate">
                                                    {newsInfo.description}
                                                </div>
                                            </div>    
                                        </div>
                                    </div> 
                                </a>      
                            ))
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default withRouter(Stock);
