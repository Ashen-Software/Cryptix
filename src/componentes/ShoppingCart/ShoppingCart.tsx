import './shoppingCart.css';
import tickets from "../../assets/tickets/ticketsCarrito";
import ElementoCarrito from '../ElementoCarrito/ElementoCarrito';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { createWallet, inAppWallet } from "thirdweb/wallets";


interface Ticket {
    id: number;
    precio: string;
    titulo: string;
    subtitulo: string;
    imagen: string;
  }
  const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

function ShoppingCart( ){

    const account = useActiveAccount();
    return (
        <div className='carrito'>
           
                <div className='elementos_carrito'>
                    <h2 className='titulo_shopping'>Shopping Cart</h2>

                    {(tickets as Ticket[]).map((ticket) => (
                        <ElementoCarrito key={ticket.id} precio={ticket.precio} titulo={ticket.titulo} subtitulo={ticket.subtitulo} imagen={ticket.imagen}/>
                        ))}
                    
                    {account ? (
                        <div className='botones'>
                        <button className='botones_elemento checkout'>Checkout</button>
                        <p className='botones_elemento cancelar'>Cancel All</p>
                    </div>
                    ) : (
                        
                    <div className='botones'>
                        <ConnectButton client={{ clientId: "ba76184dfc70100e3fb2d23dbb057170", secretKey: "er6KlYI4tQlh5WPNn_Fuy00guFk43yP24F9lCPtnKdOphDl0hSjSsfutjaN_4C44k2aPcywO2xyU6eMlS2aGqw" }} wallets={wallets} />

                    </div>
                    )}
                    
                </div>
            
        </div>
    );
}

export default ShoppingCart;