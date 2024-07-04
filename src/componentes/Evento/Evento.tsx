import { useNavigate } from 'react-router-dom';
import './evento.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ticketsCarrito from '../../assets/tickets/ticketsCarrito';

type Props = {
  id: number;
  imagen: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  hora: string;
  precio: string;
  ciudad: string;
  descripcion: string;
};
type Ticket = {
  id: number;
  precio: string;
  titulo: string;
  subtitulo: string;
  imagen: string;
  hora: string; // Add the missing 'hora' property
  descripcion: string; // Add the missing 'descripcion' property
  ciudad: string; // Add the missing 'ciudad' property
  fecha: string; // Add the missing 'fecha' property
  cantidad: number;
};

function Evento(props: Props){
  const navigate = useNavigate();
  const [showAddToCart, setShowAddToCart] = useState(true);

  const mostrarEvento = () => {
    
    navigate(`/Events/${props.id}`, { state: { event: props } });
  };

  const agregarCarrito = () => {
    const ticket: Ticket = { ...props, cantidad: 1 };
    const index = ticketsCarrito.findIndex((item) => item.id === props.id);
    if (index === -1) {
      ticketsCarrito.push(ticket);
    } else {
      ticketsCarrito[index] = ticket;
    }
    setShowAddToCart(false);
  };

  useEffect(() => {
    for (let i = 0; i < ticketsCarrito.length; i++) {
      if (ticketsCarrito[i].id === props.id) {
        setShowAddToCart(false);
        break;
      }
    }
  }, [ticketsCarrito, props]);

  const eliminarCarrito = () => {
    for (let i = 0; i < ticketsCarrito.length; i++) {
      if (ticketsCarrito[i].id === props.id) {
        ticketsCarrito.splice(i, 1);
        setShowAddToCart(true);
        break;
      }
    }
  }

  return (
    <div className='evento'>
      <div className='event-header'>
        <img className='imagen' src={props.imagen} onClick={mostrarEvento} alt={props.titulo}/>
      </div>
      <p className="titulo">{props.titulo}</p>
      <p className='subtitulo'>{props.subtitulo}</p>
      <p className='precio'>€ {props.precio}</p>
      { showAddToCart && <button className='boton' onClick={agregarCarrito}>Add to Cart!</button> }
      { !showAddToCart && <button className='delete boton' onClick={eliminarCarrito}>Delete from Cart</button> }
    </div>
  );
};

export default Evento;
