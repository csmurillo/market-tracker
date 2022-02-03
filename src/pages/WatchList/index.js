import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {WatchListContext} from '../../context/WatchListContext';
import './styles.css';

const Watchlist = () =>{
    const { watchList } = WatchListContext();
    return (
        <MainLayout>
            Watchlist
        </MainLayout>
    );
};

export default Watchlist;




