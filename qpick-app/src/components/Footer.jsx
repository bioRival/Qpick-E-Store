
// React-icons
import { RiTelegramLine } from "react-icons/ri"
import { SlSocialVkontakte } from "react-icons/sl"
import { FaWhatsapp } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"

export default function Footer() {

    return(
        <footer>
            <h1>QPICK</h1>
            <ul>
                <li><a href="#">Избранное</a></li>
                <li><a href="#">Корзина</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <div>
                <p>Условия сервиса</p>
                <div className="language-switch-con">
                    <CiGlobe />
                    <a href="#" className='active'>Рус</a>
                    <a href="#">Eng</a>
                </div>
            </div>
            <div className='socials-container'>
                <a href="#"><SlSocialVkontakte /></a>
                <a href="#"><RiTelegramLine /></a>
                <a href="#"><FaWhatsapp /></a>
                
            </div>
    
    
        </footer>
    );
};