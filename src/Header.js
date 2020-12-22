import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket.lenght);

    return (
        <div className="header">
            <Link to="./">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">Hello Guest</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Return</span>
                    <span className="header__optionTwo">& Oders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
                <Link to="./Checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__ShoppingBasketIcon"></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        {/* there is a spel mistake dude wrong{lenght}, corect{length}*/}
                        {/* <span className="header__optionLineTwo header__basketCount">{basket.lenght}</span> */}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
