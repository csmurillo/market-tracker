import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';

import { isAuthenticated } from '../../authentication/authApi';
import './account.css';

const Account = () =>{

    const [optionToggle,setOptionToggle]=useState(0);

    const { firstName, lastName, email } = isAuthenticated();

    
    const profileOption= ()=>{
        setOptionToggle(0);
    };

    const stockTrackHistoryOption= ()=>{
        setOptionToggle(1);
    };

    return (
        <MainLayout>
            <h1>Account</h1>
            <div id="account-options-container" className="d-flex">
                <div id="profile-option" className={ (optionToggle==0) ? 'active-profile-option' : '' } onClick={profileOption}>
                    Profile
                </div>
                <div id="option-divider"></div>
                <div id="stock-track-history-option" className={ (optionToggle==1) ? 'active-stock-track-history-option' : '' }  onClick={stockTrackHistoryOption}>
                    Stock Track History
                </div>
            </div>
            {/* if profile option */}
            <div id="profile-information-container">
                <div id="user-name" className="profile-information">Username: { firstName } { lastName }</div>
                <div id="email" className="profile-information">Email: { email }</div>
            </div>
        </MainLayout>
    );
};

export default Account;