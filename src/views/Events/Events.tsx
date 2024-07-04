import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Eventos from "../../componentes/Eventos/Eventos";
import icono from "../../assets/icono_mas.png"
import './events.css'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';




function Events(){

    function handleNavigation(){
        window.scrollTo(0, 635);
    }
    return (
        <>
            <Header></Header>
            <div className='mas_eventos'  onClick={ handleNavigation}>
                <img src={icono} alt=""/>
            <a >More Events</a>
            </div>
            <Eventos/>
            <Footer/>
        </>
    );

}

export default Events; 