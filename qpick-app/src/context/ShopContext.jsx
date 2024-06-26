// Context Provider. A way to send data between pages. Wraps around the app.

import { createContext, useState } from "react"
import { PRODUCTS } from "../products.js"

export const ShopContext = createContext();

function getDefaultCart() {
    let cart = {};
    PRODUCTS.forEach((item) => {
        cart[item.id] = 0;
    });
    return cart;
}

function getDefaultFav() {
    let fav = {};
    PRODUCTS.forEach((item) => {
        fav[item.id] = false;
    });
    return fav;
}

export default function ShopContextProvider(props) {
    // Array of amount of each item by id
    const [cartItems, setCartItems] = useState(getDefaultCart);

    // Array of items marked as favotire by id
    const [favItems, setFavItems] = useState(getDefaultFav);

    // Total amount of all items in cart
    const [cartAmount, setCartAmount] = useState(0);

    // Total amount of items marked as favorite
    const [favAmount, setFavAmount] = useState(0);



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


    // Marks item as favorite
    function addToFav(itemId) {
        setFavAmount(prev => prev + 1);
        setFavItems(prev => ({...prev, [itemId]: true}));
    }

    // Removes item from favorites
    function removeFromFav(itemId) {
        setFavAmount(prev => prev - 1);
        setFavItems(prev => ({...prev, [itemId]: false}));
    }

    const contextValue = {
        cartItems, 
        cartAmount, 
        addToCart, 
        removeFromCart, 
        clearFromCart, 
        getTotalPrice,
        favItems,
        addToFav,
        removeFromFav,
        favAmount,
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}