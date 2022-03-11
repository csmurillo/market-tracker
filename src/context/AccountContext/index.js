import { useState, useEffect } from 'react';
import { getToken, isAuthenticated } from '../../adapters/authApi';
import { getStockHistory } from '../../adapters/userApi';

const AccountContext = ()=>{

    const [stockHistory,setStockHistory]=useState([]);
    const authInfo = isAuthenticated();
    const token = getToken();

    useEffect(()=>{
        console.log('getting account stock history'+authInfo._id+'token:'+token);
        getStockHistory(authInfo._id,token).then((res)=>{
            const {stocks}=res;
            console.log(JSON.stringify(stocks)+"!!!");
            setStockHistory(stocks);
        });
    },[]);
    return {stockHistory};
};

export {AccountContext};