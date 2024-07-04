import React from 'react'
import './emptyCart.css'
import CartIcon from '../../assets/empty-cart.png';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
	return (
		<div className = "emptyCart-container">
			<h3>The cart is empty!</h3>
			<img src={CartIcon} alt="Cart Icon" />
			<Link to={"/Events"}><button className="boton">Go to Events</button></Link>
		</div>
	)
}

export default EmptyCart