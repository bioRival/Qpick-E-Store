import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';

export default function FavButton(props) {

    const [ active, setActive ] = useState("");
    const [ shape, setShape ] = useState("fa-regular");

    const { addToFav, removeFromFav, favItems, favAmount } = useContext(ShopContext);

    function changeHeartStyle() {
        if (shape !== "fa-solid") {
            setShape("fa-solid");
            setActive("active");
        } else {
            setShape("fa-regular");
            setActive("");
        }
             
    }

    function handleFavClick(id) {

        changeHeartStyle();

        if (favItems[id] === false) {
            addToFav(id);
        } else {
            removeFromFav(id);
        }
        console.log(favItems);
        console.log(favAmount);
    }

    return(
        <button className={`fav-card-btn ${active}`} onClick={() => handleFavClick(props.itemId)}>
            <i className={`${shape} fa-heart fa-lg`}></i>
        </button>
    );
}