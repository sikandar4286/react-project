import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run when app component run!
        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS ", authUser);

            if (authUser) {
                // the user just login
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user logout
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

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
