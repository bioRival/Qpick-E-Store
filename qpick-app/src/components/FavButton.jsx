import { useContext, useState } from 'react';

export default function FavButton(props) {

    const [ active, setActive ] = useState("");
    const [ shape, setShape ] = useState("fa-regular");

    function changeHeartStyle() {
        if (shape !== "fa-solid") {
            setShape("fa-solid");
            setActive("active");
        } else {
            setShape("fa-regular");
            setActive("");
        }
             
    }

    return(
        <button className={`fav-card-btn ${active}`} onClick={() => changeHeartStyle()}>
            <i className={`${shape} fa-heart fa-lg`}></i>
            {/* <i className='fa-regular fa-heart fa-lg'></i> */}
        </button>
    );
}