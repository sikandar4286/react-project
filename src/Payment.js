import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState();
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allow us to change the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // stripe accept the total in currencies subunit
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    console.log("the clint secret >>> ", clientSecret);

    const handleSubmit = async (event) => {
        // do all fancy stripe staff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replace("/orders");
            });
    };

    const handleChange = (e) => {
        // list change in cardElement
        // and display error as costomer type their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.messages : " ");
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    checkout (<Link to="/Checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Reviews items and Delivery</h3>
                    </div>
                    <div className="reviews__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            ></CheckoutProduct>
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payament Method</h3>
                    </div>
                    <div className="payament__details">
                        <form onClick={handleSubmit}>
                            <CardElement onClick={handleChange}></CardElement>
                            <div className="payment__priceCantainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        // payment__priceDetails
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />{" "}
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
