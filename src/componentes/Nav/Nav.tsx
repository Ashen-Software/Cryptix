import './nav.css';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import Logo from "../../assets/logo.png";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { useActiveAccount } from "thirdweb/react";
import CartIcon from "../../assets/shopping-cart.svg";



const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];
function Nav() {
    const navigate = useNavigate();
    const activeAccount = useActiveAccount();
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
        <nav className='navbar'>
            <div className="izq">
                <img src={Logo} alt="Logo"/>
                <a onClick={() => handleNavigation('home')}>HOME</a>
                <a onClick={() => handleNavigation('about')}>ABOUT</a>
                <a onClick={() => handleNavigation('contact')}>CONTACT</a>
                <Link to={"/Events"}>EVENTS</Link>
            </div>
            <div className='der'>
            {activeAccount && <Link className='link' to={"/Cart"}>
            <div className='cart-button'>
                <img src={CartIcon} alt="" />
                <span>Shopping Cart</span>

            </div></Link>}
                <ConnectButton client={{ clientId: "ba76184dfc70100e3fb2d23dbb057170", secretKey: "er6KlYI4tQlh5WPNn_Fuy00guFk43yP24F9lCPtnKdOphDl0hSjSsfutjaN_4C44k2aPcywO2xyU6eMlS2aGqw" }} wallets={wallets} />
                
            </div>
        </nav>
    );
}

export default Nav;