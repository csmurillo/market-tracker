const fetch = require('node-fetch');
// used in stockMovement
const isSingleDigit=(digit)=>{
    const regex = new RegExp('^[0-9]$');
    if(regex.test(digit)){
        return true;
    }
    return false;
};
exports.defaultDayMovementArray=()=>{
    let timeArray = [];
    let priceArray = [];
    var hour=9;
    var time=30;
    var hourEnd=16;
    const date = new Date();
    const todayYear=date.getFullYear();
    let todayMonth=date.getMonth()+1;
    let todayDay=date.getDate();
    if(isSingleDigit(todayDay)){
        todayDay="0"+todayDay;
    }
    if(isSingleDigit(todayMonth)){
        todayMonth="0"+todayMonth;
    }
    const todayDate = todayYear+'-'+todayMonth+'-'+todayDay+' ';
    timeArray.push(todayDate+'9:30:00');
    for(var i =0;i<78;i++){
        if(hour<hourEnd){
            if(time<60){
                time=time+5;
            }
            if(time>=60){
                time=0;
                hour++;
            }
            if(isSingleDigit(time)){
                let tempTime="0"+time;
                timeArray.push(''+todayDate+''+hour+':'+tempTime+':00');
            }
            else if(isSingleDigit(hour)){
                let tempHour="0"+hour;
                timeArray.push(''+todayDate+''+tempHour+':'+time+':00');
            }
            else if(isSingleDigit(hour)&&isSingleDigit(time)){
                let tempHour="0"+hour;
                let tempTime="0"+time;
                timeArray.push(''+todayDate+''+tempHour+':'+tempTime+':00');
            }
            else{
                timeArray.push(''+todayDate+''+hour+':'+time+':00');
            }
            priceArray.push(null);
        }
    }
    priceArray.push(null);
    return {timeArray:timeArray.reverse(),priceArray:priceArray.reverse()}

};

exports.getStockCurrentPrice = async(stockSymbol)=>{
    const finnhub=`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.STOCK_INFO_FINNHUB_API_KEY}`;
    const finnhubRes=await fetch(finnhub);
    const pricePromise=await finnhubRes.json();
    return pricePromise;
};