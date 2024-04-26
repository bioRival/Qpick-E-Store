
// React-icons
import { RiTelegramLine } from "react-icons/ri"
import { SlSocialVkontakte } from "react-icons/sl"
import { FaWhatsapp } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"
import styles from "./footer.module.css"

export default function Footer() {

    return(
        <footer>
            <div className={styles.logo}>QPICK</div>
            <ul>
                <li><a href="#">Избранное</a></li>
                <li><a href="#">Корзина</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <div>
                <p>Условия сервиса</p>
                <div className={styles.languageSwitchCon}>
                    <CiGlobe />
                    <a href="#" className='active'>Рус</a>
                    <a href="#">Eng</a>
                </div>
            </div>
            <div className={styles.socialsContainer}>
                <a href="#"><SlSocialVkontakte /></a>
                <a href="#"><RiTelegramLine /></a>
                <a href="#"><FaWhatsapp /></a>
                
            </div>
    
    
        </footer>
    );
};