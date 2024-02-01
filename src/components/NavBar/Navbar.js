
import logo from './img/logoprincipal.png'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav>
            <div className="conteiner">
                <img className="logo" src={logo} alt="src" />
                <div>
                    <button>Remeras</button>
                    <button>Short</button>
                    <button>Medias</button>
                    <button>Accesorios</button>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

