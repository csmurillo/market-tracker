import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./core/Header"
import Home from "./core/Home";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

const Routes = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;