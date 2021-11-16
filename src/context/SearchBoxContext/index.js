import react, { useState,useEffect } from "react";
import { getRelatedStocks } from "../../adapters/userApi";


const SearchBoxContext = ()=>{

    const [searchQuery, setSearchQuery]=useState(null);
    const [searchResults, setSearchResults]=useState();
    const [searchActive, setSearchActive] = useState(false);
    const [mobileSearchActive,setMobileSearchActive] = useState(false);
    const [searchActiveResize, setSearchActiveResize] = useState(false);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };
    const onSearchFocus = ()=>{
        console.log('active true');
        setSearchActive(true);
    };
    const onSearchMobileFocus=()=>{
        setMobileSearchActive(true);
    };
    
    const onSearchQueryBlur = (e)=>{
        console.log('faslse false');
        setSearchResults(null);
        setSearchActive(false);
    };

    const onSearchMobileQueryBlur = (e)=>{
        setSearchResults(null);
        setMobileSearchActive(false);
    };

    const onSearchQueryChange = (e) => {
        const {value}=e.target;
        if(value==''){
            setSearchQuery(null);
            setSearchResults(null);
        }
        else{
            // console.log('value value'+value);
            setSearchQuery(value);
        }
    };


    const submitForm = () => {
        getRelatedStocks(searchQuery).then((res)=>{
            const searchResult=res.searchResult;
            console.log('searched');
            console.log(searchResult);
            setSearchResults(searchResult)
            console.log(searchResults);
            console.log('-----------------');
        });
    };

    useEffect(()=>{

        getRelatedStocks(searchQuery).then((res)=>{
            const searchResult=res.searchResult;
            setSearchResults(searchResult);
        });

    },[searchQuery]);

    useEffect(()=>{

        const resize = () =>{
            if(window.innerWidth>768){
                setSearchActiveResize(false);
            }
            else{
                setSearchActiveResize(true);
            }
        };
        resize();
        window.addEventListener('resize',resize);
        return ()=>{
            window.removeEventListener('resize',resize);
        };
    },[]);

    return { searchQuery,searchResults,searchActive,mobileSearchActive,searchActiveResize,onSearchQueryBlur,onSearchMobileQueryBlur,onSearchFocus,onSearchMobileFocus,onSearchQueryChange,onHandleSubmit };
};

export {SearchBoxContext};