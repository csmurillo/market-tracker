import React from 'react';
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <header className="container-fluid" style={{borderBottom:'1px solid gray'}}>
            <div className="d-flex justify-content-between">
                <div>
                    <img style={{height:140, width:180}} src="/stock-tracker-logo.png"/>
                </div>
                <div className="d-flex">
                    <button type="button" className="btn btn-light align-self-center"><Link to="/signup">Signup</Link></button>
                    <button type="button" className="btn btn-primary align-self-center"><Link to="/signin">Login</Link></button>
                </div>
            </div>
        </header>
    );
};

export default Header;