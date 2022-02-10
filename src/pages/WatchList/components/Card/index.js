import React from 'react';
import './styles.css';
import Button from '../../../../components/Button';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Card = ({ stockName, stockTicker, stockPrice, priceTarget, priceTargetReached, InProgress }) =>{

    return (
        <div className='wl-card'>
            <div className='wl-card-top'>
                <div className='wl-card-top-content'>
                    <div className='wl-card-top-left'>
                        <div className='wl-stock-info'>
                            <div className='wl-stock-name'>
                                <Link to={'/stock/'+stockTicker}>{stockName}</Link>
                            </div>
                            <div className='wl-stock-price'>
                                $7.5
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
                                <div className='wl-card-delete-listing'>Delete Listing</div>
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
                            <div className=''>
                                <div className=''>
                                    <input type='number' value={priceTarget}/>
                                </div>
                                <div className=''>
                                    <Button className='btn' styles={{fontSize:'1em',width:'100%',backgroundColor:'rgb(138, 233, 138)', color:'white'}}>Update</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
