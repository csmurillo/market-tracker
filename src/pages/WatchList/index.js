import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {WatchListContext} from '../../context/WatchListContext';
import Card from './components/Card';
import './styles.css';

const Watchlist = () =>{
    const { watchList } = WatchListContext();
    return (
        <MainLayout>
            {/* Watchlist */}
            <Card></Card>
        </MainLayout>
    );
};

export default Watchlist;







