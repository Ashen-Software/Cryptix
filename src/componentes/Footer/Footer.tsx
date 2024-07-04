import './footer.css'
import FaceIcon from '../../assets/facebook.svg'
import TwitterIcon from '../../assets/twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'
import YoutubeIcon from '../../assets/youtube.svg'
import { useNavigate, Link } from 'react-router-dom'
import { scroller } from 'react-scroll'

const Footer = () => {

	const navigate = useNavigate();

	const handleNavigation = (target: string) => {
        if (window.location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => {
                scroller.scrollTo(target, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',

                });
            }, 100);  // Espera un poco para asegurarte de que la navegación se complete
        } else {
            scroller.scrollTo(target, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

	return (
		<div className='footer'>
			<div className='footer-content'>
				<div className="social-media">
					<ul>
						<li>
							<img src={FaceIcon} alt="" />
						</li>
						<li><img src={TwitterIcon} alt="" /></li>
						<li><img src={InstagramIcon} alt="" /></li>
						<li><img src={YoutubeIcon} alt="" /></li>
					</ul>
				</div>
				<div className="about-section">
					<h4>Cryptix</h4>
					<p>Criptix revolutionizes ticketing with blockchain technology, offering secure 
						NFT tickets, transparent transactions, bot prevention, a fair resale market, and a 
						user-friendly interface.
					</p>
				</div>
				<div className="links-section">
					<h4>Quick link</h4>
					<ul>
						<li onClick={() => handleNavigation('home')} ><span className='arrow'>&#10095;</span> Home</li>
						<li onClick={() => handleNavigation('about')}><span className='arrow'>&#10095;</span> About</li>
						<li onClick={() => handleNavigation('contact')}><span className='arrow'>&#10095;</span> Contact</li>
						<li><Link to="/Events"><span className='arrow'>&#10095;</span> Events</Link></li>
					</ul>
				</div>
				<div className="dev-section">
					<h4>Developers</h4>
					<p>We are Ashen, a skilled team of software developers focused on delivering high-quality, innovative solutions. We value collaboration and creativity to achieve exceptional results for our clients.</p>
				</div>
				<div className="contact-section">
					<h4>Contact</h4>
					<ul>
						<li>Phone: +1 234 567 890</li>
						<li>Email: <a href="mailto:ourEmail@example.com"> email </a></li>
						<li>Address: 1234 Street Name, City Name</li>
					</ul>
				</div>
			</div>
			<div className='copy'>
				<p>&copy; 2024 Ashen. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer