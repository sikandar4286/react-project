import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="Checkout">
            <div className="Checkout__left">
                <img
                    className="Checkout__ad"
                    src="https://frequentmiler.com/wp-content/uploads/2017/10/Amazon-app-5-dollar-credit-1024x370.jpg"
                    alt=""
                ></img>
                <div>
                    <h2 className="Checkout__title">Your Shopping Basket</h2>
                    {/*basketitems*/}
                    {/*basketitems*/}
                    {/*basketitems*/}
                </div>
            </div>
            <div className="Checkout__right">
                <Subtotal></Subtotal>
            </div>
        </div>
    );
}

export default Checkout;
