import React from 'react';
import './Product.css';

function Product({title, image ,price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}

                </div>

            </div>
            <img src={image} alt="hello world"></img>
            {/* <img src="https://www.junglescout.com/wp-content/uploads/2020/03/Screen-Shot-2020-05-15-at-1.00.40-PM.png" alt="hello world"></img> */}
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
