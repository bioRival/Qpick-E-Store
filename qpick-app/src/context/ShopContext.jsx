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
    const [cartItems, setCartItems] = useState(getDefaultCart());

    function addToCart(itemId) {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    function removeFromCart(itemId) {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    console.log(cartItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}