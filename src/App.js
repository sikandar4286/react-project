import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/Login">
                        <Login></Login>
                    </Route>
                    <Route path="/Checkout">
                        <Header></Header>
                        <Checkout></Checkout>
                    </Route>
                    <Route path="/">
                        <Header></Header>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
