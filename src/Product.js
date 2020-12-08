import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>here is an product for just view purpose</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
            </div>
            <img src="https://www.junglescout.com/wp-content/uploads/2020/03/Screen-Shot-2020-05-15-at-1.00.40-PM.png" alt="hello world"></img>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
