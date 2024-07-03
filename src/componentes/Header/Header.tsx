import { useEffect } from "react";
import Nav from "../Nav/Nav.js";
import Carousel from "../Carousel/Carousel";

function Header() {
    useEffect(() => {
        // Obtén la altura de la barra de navegación
        const navbar = document.querySelector(".navbar") as HTMLElement;
        const header = document.querySelector(".header") as HTMLElement;
        
        // Establece el padding-top en el contenido para evitar la superposición
        if (navbar && header) {
            const navbarHeight = navbar.offsetHeight;
            header.style.paddingTop = `${navbarHeight}px`;
        }
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <>
            <Nav />
            <div className="header">
              <Carousel />
            </div>
        </>
    );
}

export default Header;
