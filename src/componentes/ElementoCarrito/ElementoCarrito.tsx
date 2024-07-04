import { useState } from 'react';
import './elementoCarrito.css'
import Contador from '../Contador/Contador';
import { useNavigate } from 'react-router-dom';



function ElementoCarrito(props: any){
    const navigate = useNavigate();

    function mostrarEvento(){
      navigate(`/Events/${props.id}`, { state: { event: props } });
    }

    const [contador, setContador] = useState(1);

    const incrementar = () => {
      setContador(contador + 1);
    };
  
    const decrementar = () => {
      if (contador > 1){
      setContador(contador - 1);}
      else{
        setContador(1);
      }
    };

    return (
            
            <div className='elemento_carrito'>
                <div className='division'>
                <img className='imagen_carrito' onClick={mostrarEvento} src={props.imagen} alt={props.titulo} />
                <div className='informacion'>
                    <p className='precio'>€{(props.precio*contador).toFixed(2)}</p>
                    
                    <p className='titulo'>{props.titulo}</p>
                    <p className='subtitulo'>{props.subtitulo}</p>
                </div></div>
                <Contador
                    value={contador}
                    decrementar={decrementar}
                    incrementar={incrementar}/>
                </div>
     
    );
}

export default ElementoCarrito;