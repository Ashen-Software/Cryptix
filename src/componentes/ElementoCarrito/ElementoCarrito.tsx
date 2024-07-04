import { useState, useEffect } from 'react';
import './elementoCarrito.css';
import Contador from '../Contador/Contador';
import { useNavigate } from 'react-router-dom';
import ticketsCarrito from '../../assets/tickets/ticketsCarrito'; // Cambiado a import

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

function ElementoCarrito(props: any){

    const navigate = useNavigate();

    function mostrarEvento(){
      navigate(`/Events/${props.id}`, { state: { event: props } });
    }

  const [contador, setContador] = useState<number>(() => {
    // Busca el ticket en el carrito y devuelve su cantidad inicial
    const ticket = ticketsCarrito.find((item: Ticket) => item.id === props.id);
    return ticket ? ticket.cantidad : 1;
  });

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const actualizarCarrito = () => {
    const index = ticketsCarrito.findIndex((item: Ticket) => item.id === props.id);
    if (index !== -1) {
      ticketsCarrito[index].cantidad = contador;
      console.log(ticketsCarrito[index]);
    }
  };

  useEffect(() => {
    actualizarCarrito();
  }, [contador]);

  return (
    <div className='elemento_carrito'>
      <div className='division'>
        <img className='imagen_carrito' onClick={mostrarEvento} src={props.imagen} alt={props.titulo} />
        <div className='informacion'>
          <p className='precio'>€{(props.precio * contador).toFixed(2)}</p>
          <p className='titulo'>{props.titulo}</p>
          <p className='subtitulo'>{props.subtitulo}</p>
        </div>
      </div>
      <Contador
        value={contador}
        decrementar={decrementar}
        incrementar={incrementar}
      />
    </div>
  );
}

export default ElementoCarrito;
