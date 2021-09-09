import React from 'react';
import logo from '../../assets/images/stock-tracker-logos.png';
import './header.css';
import NavigationMenu from '../NavigationMenu/navigationmenu';

const Header = () =>{
    const header= ()=>(
        <div id="head" className="d-flex justify-content-between">
                <div>
                    <img id="logo"  src={logo}/>
                </div>

                {/* user */}
                {/* desktop/laptop screen */}
                <ul className="row align-self-center d-md-flex d-none">
                    <li style={{listStyleType:'none'}}><button className="btn btn-secondary">Signup</button></li>
                    <li style={{listStyleType:'none'}}><button className="ml-3 btn" style={{backgroundColor:'lightgreen'}}>Login</button></li>
                </ul>
        </div>
    );
    return (
        <header id="outer"  style={{height:'100vh'}}>
            <NavigationMenu></NavigationMenu>
        </header>
    );
};
export default Header;