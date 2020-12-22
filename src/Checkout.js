import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="Checkout">
            <div className="Checkout__left">
                <img
                    className="Checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                ></img>
                <div>
                    <h2 className="Checkout__title">Your Shopping Basket</h2>
                    {/* <CheckoutProduct
                        id="123456"
                        title="sdnkjhs cdskuhc ckdsnc cndscnkdsjc nc;dskcndcjdncjd cdnsknc"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        price={123}
                        rating={5}
                    ></CheckoutProduct>
                    <CheckoutProduct
                        id="123456"
                        title="sdnkjhs cdskuhc ckdsnc cndscnkdsjc nc;dskcndcjdncjd cdnsknc"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        price={123}
                        rating={5}
                    ></CheckoutProduct> */}
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        ></CheckoutProduct>
                    ))}
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
