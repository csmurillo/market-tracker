import React from 'react';

import './styles.css';

const Card = ({ stockName, stockPrice, priceTarget, priceTargetReached, InProgress }) =>{

    return (
        <div className='wl-card-container'>
            <div className='wl-card-top'>
                <div className='wl-card-stock-info'>
                    <div>stockName</div>
                    <div>stockPrice</div>
                </div>
                <div className='wl-card-setting'>
                    ...
                </div>
            </div>
            <div className='wl-card-bottom'>
                Price Target: $5
            </div>
        </div>
    );
};

export default Card;




