// Top navigation bar with - logo, favorite tab, cart tab

import { ShopContext } from '../context/ShopContext.jsx';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import styles from './header.module.css';

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

    return(<header className={styles.header}>
        <Link to="/">
            <h1 className={styles.logo}>QPICK</h1>

        </Link>
        <div className={styles.rightBtnsContainer}>
            <Link to="#">
                <FiHeart className={styles.iconBtn} />
                <div className={styles.counterNumber}>{favAmount}</div>
            </Link>
            <Link to="/cart">
                <RiShoppingCart2Line className={styles.iconBtn}/>
                <div className={styles.counterNumber}>{cartAmount}</div>
            </Link>
        </div>
    </header>);
}