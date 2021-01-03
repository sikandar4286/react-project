import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
    const Promise = loadStripe(
        "pk_test_51I56kdFsRc63Nt1n6xlNwnRtmPlgJEhGTn706jiji4wDMBzrSJFAziqqm3ak6r3C62KUPscJRQA08OVZSFuYotK5009js3Z5Nz"
    );
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
                    <Route path="/Payment">
                        <Header></Header>
                        <Elements stripe={Promise}>
                            <Payment></Payment>
                        </Elements>
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
