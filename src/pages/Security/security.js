import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {CgProfile} from "react-icons/cg";
import {SiWebauthn} from "react-icons/si";
import {MdDialerSip} from "react-icons/md";
import {AiOutlineUserDelete} from "react-icons/ai";
import './security.css';
import { Link } from 'react-router-dom';

const Security = () =>{
    return (
        <MainLayout>
                <div className="row">
                    <div class="security-options-container col-md-4 col-6 mb-3">
                        <Link to="editprofile">
                            <div id="security-option-profile" className="security-options h-100 d-flex flex-column justify-content-center align-items-center border rounded">
                                <CgProfile id="profile-icon" className="icons"></CgProfile>
                                <div id="profile">Profile</div>
                            </div>
                        </Link>
                    </div>
                    <div class="security-options-container col-md-4 col-6 mb-3">
                        <Link to="changepassword">
                            <div id="security-option-change-password" className="security-options h-100 d-flex flex-column justify-content-center align-items-center border rounded">
                                <SiWebauthn id="change-password-icon" className="icons"></SiWebauthn>
                                <div id="change-password">Change Password</div>
                            </div>
                        </Link>
                    </div>
                    <div class="security-options-container col-md-4 col-6 mb-3">
                        <Link to="enablealerts">
                            <div id="security-option-enable-alerts" className="security-options h-100 d-flex flex-column justify-content-center align-items-center border rounded">
                                <MdDialerSip id="enable-alerts-icon" className="icons"></MdDialerSip>
                                <div id="enable-alerts">Enable Alerts</div>
                            </div>
                        </Link>
                    </div>
                    <div class="security-options-container col-md-4 col-6 mb-3">
                        <Link to="deleteaccount">
                            <div id="security-option-delete-user" className="security-options h-100 d-flex flex-column justify-content-center align-items-center border rounded">
                                <AiOutlineUserDelete id="delete-user-icon" className="icons"></AiOutlineUserDelete>
                                <div id="delete-user">Delete Account</div>
                            </div>
                        </Link>
                    </div>
                </div>
        </MainLayout>
    );
};

export default Security;