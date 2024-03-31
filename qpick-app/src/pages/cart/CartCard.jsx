import trashCanIcon from "../../assets/img/trashcan.svg";
import { ShopContext } from '../../context/ShopContext.jsx';
import { useContext } from "react";

export default function CartCard(props) {

    const { id, name, price, salePrice, rating, category, img} = props.data;

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return(
        <div className="cart-card">
            <div className="cart-card-left">
                <img src={img} alt="product picture" />
                <div className="amount-counter">
                    <button className="btn-amount" onClick={() => addToCart(id)}>
                        <span>+</span>
                    </button>
                    <p className="item-amount">{cartItems[id]}</p>
                    <button className="btn-amount" onClick={() => removeFromCart(id)}>
                        <span>-</span>
                    </button>
                </div>
            </div>
            <div className="cart-card-center">
                <div>
                    <h3>{name}</h3>
                    <p>{price} ₽</p>
                </div>
                
            </div>
            <div className="cart-card-right">
                <button className="remove-button">
                    <img src={trashCanIcon} alt="delete" />
                </button>
                <p>{price} ₽</p>
            </div>
        </div>
    );
}