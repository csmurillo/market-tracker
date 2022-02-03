import { API } from '../config';
    
export const getWatchList = (userId,token)=>{
    return fetch(`${API}/watchlist/${userId}`, {
        method:"GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};
export const addToWatchList = (stockToAdd,userId,token) =>{ 
    return fetch(`${API}/add/to/watchlist/${userId}`, {
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(stockToAdd)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};


