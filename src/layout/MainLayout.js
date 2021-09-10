import React from 'react';
import Header from "../components/Header/header";

const MainLayout = ({children}) =>{

    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;