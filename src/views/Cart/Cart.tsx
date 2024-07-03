import React from 'react'
import Nav from '../../componentes/Nav/Nav';
import ShoppingCart from '../../componentes/ShoppingCart/ShoppingCart';
import Footer from '../../componentes/Footer/Footer';
import './cart.css';

const Cart = () => {
  return (
    <>
      <Nav/>
      <ShoppingCart/>
      <Footer/>
    </>
  )
}

export default Cart