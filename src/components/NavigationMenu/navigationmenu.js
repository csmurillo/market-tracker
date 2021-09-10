import React, { useState } from 'react';
import { GrMenu,GrFormClose } from "react-icons/gr";
import {FaUserCircle} from "react-icons/fa";
import './navigationmenu.css';
import { Link } from 'react-router-dom';

const NavigationMenu = ({userSignin}) =>{
    const [active, setActive]=useState(false);
    const menuIconClick = () =>{
        setActive(!active);
    };
    const userNavigate = ()=>(
        <ul id="user-navigate-mobile" class="container">
            <li id="profile-logo" class="user-profile nav-items">
                <div style={{ fontSize:'55px'}}>
                    <FaUserCircle style={{color:'lightgreen'}}/>
                </div>
            </li>
            <li id="login-mobile" class="nav-items link-cont">
                <Link style={{color:'black',textDecoration:'none'}}>Login</Link>
            </li>
            <li id="signup-mobile" class="nav-items link-cont">
                <Link style={{color:'black',textDecoration:'none'}}>Signup</Link>
            </li>
        </ul>
    );
    const userSignedin = ()=>(
        <ul id='user-signedin-mobile' class="container">
            <li id="profile-signedin-logo" class="user-profile nav-items">
                <div style={{ fontSize:'55px'}}>
                    <FaUserCircle style={{color:'lightgreen'}}/>
                </div>
                <div style={{ fontSize:'35px'}}>Angel M</div>
            </li>
            <li id="account-mobile" class="nav-items link-cont">
                <Link style={{color:'black',textDecoration:'none'}}>Account</Link>
            </li>
            <li id="security-mobile" class="nav-items link-cont">
                <Link style={{color:'black',textDecoration:'none'}} class="link">Security</Link>
            </li>
            <li id="logout-mobile" class="nav-items link-cont">
                <Link style={{color:'black',textDecoration:'none'}}>Logout</Link>
            </li>
        </ul>
    );

    return (
        <div id="navigation-menu">
            <div id="menu-icon-container" onClick={menuIconClick}>
                { active ? <GrFormClose style={{fontSize:50}}/> : <GrMenu style={{fontSize:28}}/> }
            </div>
            <nav id="navigation-sidebar-menu"  className={`container ${ active ? 'active':'' }`}>
                {/* user */}
                {userNavigate()}
                {/* user logged in */}
                {userSignedin()}
            </nav>
        </div>
    );
};

export default NavigationMenu;