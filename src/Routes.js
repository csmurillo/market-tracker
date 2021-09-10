import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer"
import Home from "./pages/Home/home"
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import WatchList from "./pages/WatchList/watchlist";

import PrivateRoute from "./authentication/PrivateRoute";

const Routes = () =>{
    return (
        <BrowserRouter>
        {/* <Header/> */}
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <PrivateRoute path="/watchlist" exact component={WatchList}/>
            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    );
}


export default Routes;