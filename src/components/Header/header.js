import React from 'react';
import logo from '../../assets/images/stock-tracker-logos.png';
import {FaUserCircle} from "react-icons/fa";
import './header.css';
import NavigationMenu from '../NavigationMenu/navigationmenu';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../authentication/authApi';

const Header = () =>{

    const { firstName, lastName } = isAuthenticated();

    const userNavigate = ()=>(
        <ul id="user-navigate" className="align-self-center d-sm-flex d-none mr-4 mb-0">
            <li id="signup" style={{listStyleType:'none'}}>
                <Link to="/signup">
                    <Button className="btn btn-secondary" >
                        Signup
                    </Button>
                </Link>
            </li>
            <li id="login" style={{listStyleType:'none'}}>
                <Link to="/signin">
                    <Button className="ml-3 btn" styles={{backgroundColor:'rgb(138, 233, 138)', color:'white'}}>
                        Login
                    </Button>
                </Link>
            </li>
        </ul>
    );
    const userSignedin = ()=>(
        <div id="user-signedin" className="align-self-center d-sm-flex d-none mr-4">
            <div class="dropdown">
                <div data-toggle="dropdown">
                    <div id="user-icon"><FaUserCircle style={{color:'lightgreen'}}/></div>
                    <div id="user-name">
                        {firstName} {lastName}
                    </div>
                </div> 
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropDownMenu">
                    <Link to="/account">
                        <button id="account" class="dropdown-item" type="button">Account</button>
                    </Link>
                    <Link to="/security">
                        <button id="security" class="dropdown-item" type="button">Security</button>
                    </Link>
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
                {isAuthenticated() && userSignedin()}
                {/* user: not signin */}
                {/* desktop/laptop screen */}
                {!isAuthenticated() && userNavigate()}

        </div>
    );
    return (
        <header className="container">
            {header()}
            
        </header>
    );
};
export default Header;