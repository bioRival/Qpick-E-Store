// Top navigation bar with - logo, favorite tab, cart tab

import { ShopContext } from '../context/ShopContext.jsx';
import { useContext } from "react";
import { Link } from 'react-router-dom';

// React icons
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

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
                <FiHeart className='icon-btn' />
                <div className='counter-number'>{favAmount}</div>
            </Link>
            <Link to="/cart">
                <RiShoppingCart2Line className='icon-btn'/>
                <div className='counter-number'>{cartAmount}</div>
            </Link>
        </div>
    </header>);
}