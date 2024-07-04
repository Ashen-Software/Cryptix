import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './eventView.css';
import Nav from '../../componentes/Nav/Nav';
import DescripcionEvento from '../../componentes/DescripcionEvento/DescripcionEvento';
import Footer from '../../componentes/Footer/Footer'


function EventView() {
  const location = useLocation();
  const { event } = location.state;

  

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al inicio de la página al cargar
  }, []);

  return (
    <>
      <Nav />
      <div className='eventView-container'>
      <img className='imagen' src={event.imagen} alt={event.titulo} />
        <DescripcionEvento 
          titulo={event.titulo}
          subtitulo={event.subtitulo}
          fecha={event.fecha}
          precio={event.precio}
          ciudad={event.ciudad}
          hora={event.hora}
          imagen={event.imagen}
          id={event.id} key={0} descripcion={event.descripcion}        />
      </div>
      <div className='about_evento'>
        <p className='titulo_about_de_la_vista'>About this Event</p>
        <p className='descripcion_evento'>{event.descripcion}</p>
      </div>
      <Footer />
    </>
  );
}

export default EventView;
