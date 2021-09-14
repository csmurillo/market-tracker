import React from 'react';
import Header from "../components/Header/header";

const MainLayout = ({children}) =>{

    return (
        <div>
            <Header></Header>
            <div className="container pt-5">{children}</div>
        </div>
    );
};

export default MainLayout;