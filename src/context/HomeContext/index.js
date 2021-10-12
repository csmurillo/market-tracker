import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getDowJones, getGainerStocks, getLoserStocks } from '../../adapters/stockApi';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from 'react-icons/md';

const HomeContext = ()=>{
    // dow jones and current top gainer/loser
    // used respectively: component: DowJones, TopGainerStocks, TopLoserStocks
    const [ dowJones,setDowJones] = useState();
    const [ gainerStocks, setGainerStocks ]=useState();
    const [ loserStocks, setLoserStocks ]=useState();
    // slider settings
    const history=useHistory();
    const [ sliderSettings,setSliderSettings ]= useState({
        arrows:true,
        infinite: true,
        nextArrow:null,
        prevArrow:null,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive:[
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

        ]
    });
    // communcates with stockapi adapter to get live data on dowjones, current top gainer/loser stocks
    useEffect(()=>{
        getDowJones().then(dowjones=>{
            const dowJonesValue=dowjones.dowjones.dowjones.values;
            setDowJones(dowJonesValue);
        });
        getGainerStocks().then(gainers=>{
            console.log('right here1');
            const mostGainStocks=gainers.gainers.gainers.mostGainerStock;
            setGainerStocks(mostGainStocks);
        });
        getLoserStocks().then(losers=>{
            // console.log(losers.losers.losers.mostLoserStock+'1!!');
            const mostLoserStocks=losers.losers.losers.mostLoserStock;
            // console.log(mostLoserStocks+'!!!');
            setLoserStocks(mostLoserStocks);
        });
    },[]);

    // slider arrow will be set on home page
    useEffect(()=>{
        if(history.location.pathname=='/'){
            setSliderArrows();
        }
    },[]);

    const setSliderArrows = ()=>{
        setSliderSettings({...sliderSettings,nextArrow:<SliderRightArrow to="next"/>,prevArrow:<SliderLeftArrow to="prev"/>});
    };
    const SliderLeftArrow = ({ className, style, onClick })=>(
        <div className="left-arrow" onClick={onClick} ><MdKeyboardArrowLeft></MdKeyboardArrowLeft></div>
    );
    const SliderRightArrow = ({ className, style, onClick })=>(
        <div className="right-arrow" onClick={onClick} style={style}><MdKeyboardArrowRight></MdKeyboardArrowRight></div>
    );

    return {sliderSettings,dowJones,gainerStocks,loserStocks};
};

export {HomeContext};