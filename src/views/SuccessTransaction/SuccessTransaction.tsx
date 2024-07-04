import React from 'react'
import Nav from '../../componentes/Nav/Nav'
import Footer from '../../componentes/Footer/Footer'
import { Link } from 'react-router-dom';
import './successTransaction.css'
import { useEffect } from 'react';
import ticketsCarrito from '../../assets/tickets/ticketsCarrito'



function SuccessTransaction() {

	useEffect(() => {
		

			let n = ticketsCarrito.length;
			for(let i = 0; i < n; i++) {
				ticketsCarrito.pop();
		}
	}, [])



	return (
		<>
			<Nav/>
			<div className='congratulations-container'>
				<img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/44-512.png" alt="check"/>
				<p className='congratulations'>Congratulations</p>
				<p className='congratulations-subtitle'>Transaction Completed Succesfully</p>
				<Link className="home-link" to="/">Home</Link>
			</div>
			<Footer/>
		</>
	)
}

export default SuccessTransaction;