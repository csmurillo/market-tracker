import React, {useEffect, useState} from 'react';
import './styles.css';
import Button from '../../../../components/Button';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import socket from '../../../../context/Socketio';
const Card = ({ stockName, stockSymbol, stockPrice, priceTarget, priceTargetReached, InProgress,cardUpdate, cardDelete }) =>{

    const [cardPriceTarget,setCardPriceTarget]=useState();

    useEffect(()=>{
        setCardPriceTarget(priceTarget);
    },[]);

    const cardUpdatePriceTarget=(e)=>{
        e.preventDefault();
        cardUpdate(stockSymbol,cardPriceTarget);
    };

    const onChangeCardPriceTarget=(e)=>{
        setCardPriceTarget(e.target.value);
    };
    return (
        <div className='wl-card'>
            <div className='wl-card-top'>
                <div className='wl-card-top-content'>
                    <div className='wl-card-top-left'>
                        <div className='wl-stock-info'>
                            <div className='wl-stock-name'>
                                <Link to={'/stock/'+stockSymbol}>{stockName}</Link>
                            </div>
                            <div className='wl-stock-price'>
                                ${stockPrice}
                            </div>
                        </div>
                        <div className='wl-stock-status'>
                            <div className='wl-stock-status-in-progress'>In Progress</div>
                            {/* <div className='wl-price-target'>Price Target <AiOutlineCheckCircle></AiOutlineCheckCircle></div> */}
                        </div>
                    </div>
                    <div className='wl-card-top-right'>
                        <div className='dropdown'>
                            <div className='wl-card-settings' data-toggle='dropdown'>...</div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropDownMenu">
                                <div className='wl-card-delete-listing' onClick={()=>{cardDelete(stockSymbol)}}>Delete Listing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wl-card-bottom'>
                <div className='wl-card-bottom-content'>
                    <div className='wl-card-bottom-left'>
                        <div className='wl-card-bottom-price-target-title'>Price Target:</div>
                    </div>
                    <div className='wl-card-bottom-right dropup'>
                        <div class='wl-card-bottom-price-target' data-toggle="dropdown">${priceTarget}</div>
                        <div class="dropdown-menu dropdown-menu-right">
                            <form onSubmit={cardUpdatePriceTarget} className=''>
                                <div className=''>
                                    <input type='number' name='price' value={cardPriceTarget} onChange={onChangeCardPriceTarget}/>
                                </div>
                                <div className=''>
                                    <Button type='submit' className='btn' styles={{fontSize:'1em',width:'100%',backgroundColor:'rgb(138, 233, 138)', color:'white'}}>Update</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;









