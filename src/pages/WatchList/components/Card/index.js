import React from 'react';

import './styles.css';

const Card = ({ stockName, stockPrice, priceTarget, priceTargetReached, InProgress }) =>{

    return (
        <div className='card-container'>
            <div className='card-top'>
                <div className='card-stock-info'>
                    <div>stockName</div>
                    <div>stockPrice</div>
                </div>
                <div className='card-setting'>
                    ...
                </div>
            </div>
            <div className='card-bottom'>
                Price Target: $5
            </div>
        </div>
    );
};

export default Card;
