import './Header.css';
import Logo from '../../assets/img/logo.svg';
import Brujula from '../../assets/img/brujula.svg';
import Bolsa from '../../assets/img/bolsa.svg';
import Asistencia from '../../assets/img/asistencia.svg';

const Header = () => {
    return (
        <header>
            <div className="contenedorLogo">
                <img src={Logo} alt="Logo"/>
            </div>
            <nav class="menu">
                <ul>
                    <li><img src={Brujula} alt="Explorar"/> <a href="#">Explorar</a></li>
                    <li><img src={Bolsa} alt="Comprar"/> <a href="#">Comprar</a></li>
                    <li><img src={Asistencia} alt="Asistencia"/> <a href="#">Asistencia</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;