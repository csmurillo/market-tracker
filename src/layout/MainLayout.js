import React from 'react';
import Header from "../components/Header/header";
import Footer from "../components/Footer";

const MainLayout = ({children}) =>{

    return (
        <div>
           <div>
                <Header></Header>
                <div className="container pt-5 h-100" style={{overflowX:'hidden',overflowY:'auto'}}>{children}</div>
                <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;