import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import styles from './favbutton.module.css';

// React Icons
import { FaHeart } from "react-icons/fa"; // Filled
import { FiHeart } from "react-icons/fi"; // Bold, Outlined

export default function FavButton(props) {

    // Style toggle on click
    const [ active, setActive ] = useState();

    const { addToFav, removeFromFav, favItems, favAmount } = useContext(ShopContext);

    function handleFavClick(id) {
        active ? setActive("") : setActive(styles.active);
        favItems[id] ? removeFromFav(id) : addToFav(id);
    }

    return(
        <button 
        className={`${styles.btn} ${active}`} 
        onClick={() => handleFavClick(props.itemId)}>
                {favItems[props.itemId] ? <FaHeart /> : <FiHeart />}
        </button>
    );
}