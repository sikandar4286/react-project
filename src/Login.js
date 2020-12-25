import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sighIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.messages));

        // here is some Fancy firebase login work
    };
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it is success create a user with eamil and passwaord
                // console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.messages));

        // here is some Fancy firebase signUp work
    };

    return (
        <div className="login">
            <Link to="./">
                <img
                    className="login__logo"
                    src="https://www.clipartmax.com/png/middle/4-47390_https-amzn-to-2idecvc-amazon-logo-transparent.png"
                ></img>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={sighIn} type="submit" className="login_signInButton">
                        Sign-in
                    </button>
                </form>
                <p>Terms and Condition given by the fake Amazon Clone Website!!! Please see our Privicy notice</p>
                <button onClick={register} type="submit" className="login_registerButton">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
