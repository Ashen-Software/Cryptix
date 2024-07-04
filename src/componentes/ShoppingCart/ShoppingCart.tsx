import "./shoppingCart.css";
import tickets from "../../assets/tickets/ticketsCarrito";
import ElementoCarrito from "../ElementoCarrito/ElementoCarrito";
import { ConnectButton, useActiveAccount, TransactionButton, useSwitchActiveWalletChain  } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import EmptyCart from "../EmptyCart/EmptyCart";
import {  } from "thirdweb/chains";
import { useNavigate } from 'react-router-dom';


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
const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];


function ShoppingCart() {
  function success() {
    navigate("/SuccessTransaction");
  }
  const account = useActiveAccount();
  const navigate = useNavigate();
  return (
    <div className="carrito">
      <div className="elementos_carrito">
        <h2 className="titulo_shopping">Shopping Cart</h2>

        {tickets.length === 0 ? (
          <EmptyCart />
        ) : (
          tickets.map((ticket: Ticket) => ( // Specify the type of 'ticket' as 'Ticket'
            <ElementoCarrito
              key={ticket.id}
              precio={ticket.precio}
              titulo={ticket.titulo}
              subtitulo={ticket.subtitulo}
              hora={ticket.hora}
              imagen={ticket.imagen}
              descripcion={ticket.descripcion}
              id={ticket.id}
              ciudad={ticket.ciudad}
              fecha={ticket.fecha}
            />
          ))
        )}

        {tickets.length > 0 && (
          <div className="botones">
            <button className="botones_elemento checkout" onClick={success}>Checkout</button>
            <p className="botones_elemento cancelar">Cancel All</p>
          </div>
        )}

        {!account && (
          <div className="botones">
            <ConnectButton
              client={{
                clientId: "ba76184dfc70100e3fb2d23dbb057170",
                secretKey:
                  "er6KlYI4tQlh5WPNn_Fuy00guFk43yP24F9lCPtnKdOphDl0hSjSsfutjaN_4C44k2aPcywO2xyU6eMlS2aGqw",
              }}
              wallets={wallets}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
