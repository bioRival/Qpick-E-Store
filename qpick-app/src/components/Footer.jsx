import globeIcon from '../assets/img/globe.svg'
import VKIcon from '../assets/img/VK.svg'
import TelegramIcon from '../assets/img/Telegram.svg'
import WhatsappIcon from '../assets/img/Whatsapp.svg'

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
                    <img src={globeIcon} alt="globe icon" />
                    <a href="#" className='active'>Рус</a>
                    <a href="#">Eng</a>
                </div>
            </div>
            <div className='socials-container'>
                <a href="#"><img src={VKIcon} alt="vk" /></a>
                <a href="#"><img src={TelegramIcon} alt="telegram" /></a>
                <a href="#"><img src={WhatsappIcon} alt="whatsapp" /></a>
            </div>
    
    
        </footer>
    );
};