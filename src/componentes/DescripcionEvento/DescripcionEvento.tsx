import './descripcionEvento.css';
import Contador from '../Contador/Contador';
import { useState } from "react";
import credit_card from '../../assets/credit_card_icon.png';

function DescripcionEvento(props: any){
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

    return(
        <div className='descripcion'>
            <div className='descripcion_titulos'>
            <p className='title'>{props.titulo}</p>
            <p className='subtitulo'>Información General</p>
            <div className='descripcion_informacion'>
            <p><span className='subtitle'>Lugar:</span> {props.subtitulo}</p>
            <p><span className='subtitle'>Ciudad:</span> {props.ciudad}</p>
            <p><span className='subtitle'>Fecha:</span> {props.fecha}</p>
            <p><span className='subtitle'>Hora:</span> {props.hora}</p></div>
            </div>
            <p className='precio'>€{(props.precio * contador).toFixed(2) }</p>
            <div className='pago_icono'>
              <div className='pago'>
                <Contador value={contador}
                  decrementar={decrementar}
                  incrementar={incrementar}/><span>Cantidad</span>
              </div>  
                <img className='icono' src={credit_card}/>
              </div>
            <button className='boton_carrito'>ADD TO CART!</button>
            <p className='abajo'>By -{'>'} Honey :3</p>

        </div>
    );


}

export default DescripcionEvento;