// Context Provider. A way to send data between pages. Wraps around the app.

import { createContext, useState } from "react"
import { PRODUCTS } from "../products.js"

export const ShopContext = createContext();

function getDefaultCart() {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export default function ShopContextProvider(props) {
    // Array of amount of each item by id
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Total amount of all items in cart
    const [cartAmount, setCartAmount] = useState(0);

    // Returns sum cost for all items in cart
    function getTotalPrice() {
        let totalPrice = 0;
        for (const id in cartItems) {
            if (cartItems[id] > 0) {
                let item = PRODUCTS.find((product) => product.id === Number(id));
                console.log(item);
                totalPrice += cartItems[id] * item.price;
            }
        }
        return totalPrice;
    }

    // Adds 1 item in cart
    function addToCart(itemId) {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
        setCartAmount(prev => prev + 1);
    }

    // Removes 1 item from cart
    function removeFromCart(itemId) {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}));
        setCartAmount(prev => prev - 1);
    }

    //Removes item from cart no matter the amount
    function clearFromCart(itemId) {
        setCartAmount(prev => prev - cartItems[itemId]);
        setCartItems(prev => ({...prev, [itemId]: 0}));
    }

    const contextValue = {cartItems, cartAmount, addToCart, removeFromCart, clearFromCart, getTotalPrice}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}