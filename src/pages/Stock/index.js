import React from 'react';
import MainLayout from '../../layout/MainLayout';

const Stock = () =>{

    return (
        <MainLayout>
            <div>
                <div id="stock-symbol-information">
                    <div>
                        Stock Symbol
                    </div>
                    <div>
                        Stock graph
                    </div>
                    <div>
                        Stock months
                    </div>
                </div>
                <div id="stock-symbol-news">
                    <div id="stock-news-title">
                        Stock News
                    </div>
                    <div id="stock-news">
                        <div>news1</div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Stock;

