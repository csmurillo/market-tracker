import React from 'react';
import Plot from 'react-plotly.js';
import MainLayout from '../../layout/MainLayout';
import Button from '../../components/Button';
import { withRouter } from "react-router-dom";
import { StockContext } from '../../context/StockContext';
import './styles.css';

const Stock = ({history}) =>{
    const {stockNews}=StockContext(history.location.pathname);
    return (
        <MainLayout>
            <div id="stock">
                <div id="stock-symbol-information">
                    <div id="stock-symbol-header">
                        <div id="stock-symbol">Black Berry (BB)</div>
                        <div id="stock-symbol-add-to-watchlist-button">
                            <Button className='btn' styles={{fontSize:'20px',width:'150px',borderRadius:'15px',backgroundColor:'rgb(138, 233, 138)', color:'white'}}>WatchList +</Button>
                        </div>
                    </div>
                    <div id="stock-symbol-graph">
                        <div id="graph-container">
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
                            layout={ {width: 550, height: 350} }
                            config = {{displayModeBar: false}}
                            />
                        </div>
                    </div>
                    <div id="stock-symbol-timestamps">
                        <Button className='btn' styles={{height:'40px',backgroundColor:'rgb(138, 233, 138)', color:'white',marginRight:'5px'}}>1h</Button>
                        <Button className='btn' styles={{height:'40px',backgroundColor:'rgb(138, 233, 138)', color:'white',marginRight:'5px'}}>1w</Button>
                        <Button className='btn' styles={{height:'40px',backgroundColor:'rgb(138, 233, 138)', color:'white',marginRight:'5px'}}>1m</Button>
                        <Button className='btn' styles={{height:'40px',backgroundColor:'rgb(138, 233, 138)', color:'white',marginRight:'5px'}}>1y</Button>
                        <Button className='btn' styles={{height:'40px',backgroundColor:'rgb(138, 233, 138)', color:'white',marginRight:'5px'}}>5y</Button>
                    </div>
                </div>
                <div id="stock-symbol-news">
                    <div id="stock-news-title" className='d-flex justify-content-center'>
                        <h1>Stock News</h1>
                    </div>
                    <div id="stock-news">
                        <div>
                            {
                                stockNews.map((newsInfo,i)=>(
                                    <div style={{display:'flex',border:'1px solid pink'}} key={i}>
                                        <div style={{width:'60px',height:'60px'}}>
                                            <img style={{width:'60px',height:'60px'}} src={newsInfo.urlToImage}/>
                                        </div>
                                        <div>
                                            <div>
                                                {newsInfo.title}
                                            </div>
                                            <div>
                                                {/* {newsInfo.description} */}
                                            </div>
                                            <div>
                                                {/* {newsInfo.content} */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default withRouter(Stock);
