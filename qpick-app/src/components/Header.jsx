// Top navigation bar with - logo, favorite, cart

import favIcon from '../assets/img/fav.svg'
import cartIcon from '../assets/img/cart.svg'

import { Link } from 'react-router-dom'

export default function Header() {
    return(<header className="header">
        <Link to="/">
            <h1 className='logo'>QPICK</h1>

        </Link>
        <div className='right-btns-container'>
            <Link to="#">
                <img className='icon-btn' value={0} src={favIcon} alt="cart-pic" />
                <div className='counter-number'>0</div>
            </Link>
            <Link to="/cart">
                <img className='icon-btn' value={0} src={cartIcon} alt="cart-pic" />
                <div className='counter-number'>0</div>
            </Link>
        </div>
    </header>);
}