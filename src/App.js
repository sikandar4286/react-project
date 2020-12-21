import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
    return (
        <div className="app">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/Checkout">
                        <Checkout></Checkout>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
