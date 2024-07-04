import './about.css'
import Arrows from '../../assets/arrows.svg'
import Cel from '../../assets/cel.svg'

const About = () => {
	return (
		<>
		<div className="about-container">
		<section className='about-section'>
			<img className='arrow-img left' src={Arrows} alt="" />
			<h2 className='about-title'>ABOUT</h2>
			<p className='about-text'>Welcome to Cryptix, where we revolutionize ticketing through blockchain technology. Our platform ensures secure, transparent, and user-friendly ticket transactions by issuing tickets as unique, non-fungible tokens (NFTs) on the blockchain.</p>
			<img className='arrow-img right' src={Arrows} alt="" />
		</section>
		<section className="features-section">
			<div className="left">
			<h2 className="features-title">Key Features:</h2>
				<ul className='features-list'>
					<li>Secure and Authentic Tickets: Each ticket is a verifiable NFT.</li>
					<li>Transparent Transactions: All ticket sales and transfers are recorded on the blockchain.</li>
					<li>Bot and Scalper Prevention: Advanced verification ensures real fans get tickets.</li>
					<li>Fair Resale Market: Smart contracts enforce fair resale practices.</li>
					<li>User-Friendly Experience: Easy-to-use interface for buying, selling, 	and managing tickets.</li>
				</ul>
			</div>
			<div className="right">
				<img src={Cel} alt="" />
			</div>
		
		</section>
		</div>
		
		</>
	)
}

export default About