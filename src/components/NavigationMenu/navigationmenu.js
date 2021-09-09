import React, { useState } from 'react';
import './navigationmenu.css';

const NavigationMenu = (navItems) =>{
    
    const [active, setActive]=useState(false);

    const onClick = ()=>{
        setActive(!active);
    };

    return (
        <div id="navigation-menu">
            <div id="menu-icon" onClick={onclick}>
                menu11
                {active ? (<div>menu</div>):(<div>menu2</div>)}
            </div>
            <nav id="navigation-sidebar-menu" className={`${ active ? 'active':'' }`}>
                <ul>
                    <li>Account</li>
                    <li>Security</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationMenu;