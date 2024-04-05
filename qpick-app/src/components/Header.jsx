// Top navigation bar with - logo, favorite, cart

import favIcon from '../assets/img/fav.svg'
import cartIcon from '../assets/img/cart.svg'
import { ShopContext } from '../context/ShopContext.jsx';
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

    const { 
        cartItems, 
        cartAmount, 
        addToCart, 
        removeFromCart,
        favAmount,
    } = useContext(ShopContext);

    return(<header className="header">
        <Link to="/">
            <h1 className='logo'>QPICK</h1>

        </Link>
        <div className='right-btns-container'>
            <Link to="#">
                <img className='icon-btn' src={favIcon} alt="cart-pic" />
                <div className='counter-number'>{favAmount}</div>
            </Link>
            <Link to="/cart">
                <img className='icon-btn' src={cartIcon} alt="cart-pic" />
                <div className='counter-number'>{cartAmount}</div>
            </Link>
        </div>
    </header>);
}