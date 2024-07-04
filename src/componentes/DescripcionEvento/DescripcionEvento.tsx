import './descripcionEvento.css';
import Contador from '../Contador/Contador';
import { useEffect, useState } from 'react';
import credit_card from '../../assets/credit_card_icon.png';
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
  key: number;
};

type Ticket = Props & {
  cantidad: number;
};

function DescripcionEvento(props: Props) {
  const [contador, setContador] = useState(1);
  const [showAddToCart, setShowAddToCart] = useState(true);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    const ticket: Ticket = { ...props, cantidad: contador };
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
        setContador(ticketsCarrito[i].cantidad);
        break;
      }
    }
  }, [props.id]);

  const actualizarCarrito = () => {
    const index = ticketsCarrito.findIndex((item) => item.id === props.id);
    if (index !== -1) {
      ticketsCarrito[index].cantidad = contador;
    }
  };



  useEffect(() => {    
    if (!showAddToCart) {
      actualizarCarrito();
    }
  }, [contador]);

  const eliminarCarrito = () => {
    for (let i = 0; i < ticketsCarrito.length; i++) {
      if (ticketsCarrito[i].id === props.id) {
        ticketsCarrito.splice(i, 1);
        setShowAddToCart(true);
        break;
      }
    }
  };

  return (
    <div className='descripcion'>
      <div className='descripcion_titulos'>
        <p className='title'>{props.titulo}</p>
        <p className='subtitulo'>Información General</p>
        <div className='descripcion_informacion'>
          <p><span className='subtitle'>Lugar:</span> {props.subtitulo}</p>
          <p><span className='subtitle'>Ciudad:</span> {props.ciudad}</p>
          <p><span className='subtitle'>Fecha:</span> {props.fecha}</p>
          <p><span className='subtitle'>Hora:</span> {props.hora}</p>
        </div>
      </div>
      <p className='precio'>€{(Number(props.precio) * contador).toFixed(2)}</p>
      <div className='pago_icono'>
        <div className='pago'>
          <Contador
            value={contador}
            decrementar={decrementar}
            incrementar={incrementar}
          /><span>Cantidad</span>
        </div>
        <img className='icono' src={credit_card} alt='credit card icon'/>
      </div>
      {showAddToCart ? (
        <button className='boton_carrito' onClick={agregarCarrito}>Add to Cart!</button>
      ) : (
        <button className='delete boton_carrito' onClick={eliminarCarrito}>Delete from Cart</button>
      )}
      <p className='abajo'>By -{'>'} Honey :3</p>
    </div>
  );
}

export default DescripcionEvento;
