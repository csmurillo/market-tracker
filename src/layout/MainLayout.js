import React from 'react';
import Header from "../components/Header/header";
import Footer from "../components/Footer";

const MainLayout = ({children}) =>{

    return (
        <div>
            <Header></Header>
            <div className="container pt-5" style={{overflowX:'hidden',overflowY:'auto'}}>{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;