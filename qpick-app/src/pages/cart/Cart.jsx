import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Cart.css";
import CartCard from "./CartCard.jsx";
import { PRODUCTS } from "../../products.js";
import { ShopContext } from '../../context/ShopContext.jsx';
import { useContext } from 'react';

export default function Cart() {

    const { cartItems } = useContext(ShopContext);

    return (
    <div className="container">
        <Header/>
        <h2 className="cart-title">Корзина</h2>
        <div className="cart-card-container">
            <div className="cart-card-column">
                {PRODUCTS.map((product => {
                    if (cartItems[product.id] > 0) {
                        return <CartCard data={product}/>
                    }
                }))}
                
            </div>
            <div className="checkout-container">
                <div>
                    <p>ИТОГО</p>
                    <p>₽ 2927</p>
                </div>
            <button className="checkout-button">Перейти к оформлению</button>
            </div>
        </div>

        
        <Footer/>

        
    </div>);
}