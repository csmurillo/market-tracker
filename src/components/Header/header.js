import React from 'react';
import logo from '../../assets/images/stock-tracker-logos.png';
import {FaUserCircle} from "react-icons/fa";
import './header.css';
import NavigationMenu from '../NavigationMenu/navigationmenu';
import Button from '../Button';

const Header = () =>{
    const userNavigate = ()=>(
        <ul id="user-navigate" className="align-self-center d-sm-flex d-none mr-4 mb-0">
            <li id="signup" style={{listStyleType:'none'}}>
                <Button className="btn btn-secondary">Signup</Button>
            </li>
            <li id="login" style={{listStyleType:'none'}}>
                <Button className="ml-3 btn" color='rgb(138, 233, 138)' colorText='white'>Login</Button>
            </li>
        </ul>
    );
    const userSignedin = ()=>(
        <div id="user-signedin" className="align-self-center d-sm-flex d-none mr-4">
            <div class="dropdown">
                <div data-toggle="dropdown">
                    <div id="user-icon"><FaUserCircle style={{color:'lightgreen'}}/></div>
                    <div id="user-name">
                        Angel M
                    </div>
                </div> 
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropDownMenu">
                    <button id="account" class="dropdown-item" type="button">Account</button>
                    <button id="security" class="dropdown-item" type="button">Security</button>
                    <button id="logout" class="dropdown-item" type="button">Logout</button>
                </div>
            </div>
        </div>
    );

    const header= ()=>(
        <div id="header" className="d-flex justify-content-between">
                <div className="d-flex align-self-center ml-4">
                    <img id="logo"  src={logo}/>
                </div>
                <div className="d-sm-none d-flex align-self-center">
                    <NavigationMenu ></NavigationMenu>
                </div>
                {/* user: signed in */}
                {/* desktop/laptop screen */}
                {userSignedin()}
                {/* user: not signin */}
                {/* desktop/laptop screen */}
                {/* {userNavigate()} */}
        </div>
    );
    return (
        <header className="container">
            {header()}
            
        </header>
    );
};
export default Header;