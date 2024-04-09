import './MerchCard.css'
import { ShopContext } from '../context/ShopContext.jsx'
import { useContext, useState } from 'react';
import FavButton from './FavButton.jsx';

// React Icons
import { MdStar } from "react-icons/md";

export default function MerchCard(props) {

    const { id, name, price, salePrice, rating, category, img} = props.data;

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);



    return(
        <div className="merch-card">
            <div className="merch-img-container">
                <img src={img} alt="merch picture" />
            </div>
            <div className="merch-first-line">
                <h2 className="merch-name">{name}</h2>
                <div className="price">{price.toLocaleString('ru-RU')} ₽
                    {/* Crossed-out price at the bottom */}
                    {salePrice !== null &&
                        <p className='sale-price'>
                            {salePrice.toLocaleString('ru-RU')} ₽
                        </p>}
                </div>
            </div>
            <div className="merch-second-line">
                <div style={{display: "flex", alignItems: "center", gap: 4}}>
                    <MdStar />
                    <span className='merch-rating'>{rating}</span>
                </div>
                <button onClick={() => addToCart(id)}>
                    Купить  {cartItems[id] > 0 && `(${cartItems[id]})`}
                </button>
            </div>
            <FavButton itemId={id}/>
        </div>
    );
}