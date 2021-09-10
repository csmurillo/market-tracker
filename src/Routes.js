import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer"
import Home from "./pages/Home/home"
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";

const Routes = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                {/* <Route path="/" exact component={Home}/> */}
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    );
}


export default Routes;