import './contact.css'
import maquilon from '../../assets/maquilon.png'
import email from '../../assets/email-icon.png'
import github from '../../assets/github-icon.png'
import location from '../../assets/location-icon.png'

function Contact(){

    return (
        <div className='contactEntero'>
            <div className='titulos'>
            <p className='titulo-contact'>Contact Us</p>
            <p className='subtitulo-contact'>Any questions or remarks?, Just leave us a message!</p>
            </div>

            <div className='contact-container'>
                <img className='maquilon' src="https://syntrio.com/wp-content/uploads/2022/11/syntrio-contact-purple-us.png" alt="maquilon foto"/>
                <div className='contact-information'>
                    <p className='titulo-contact-information'>Contact Information</p>
                    <div className='informacion'>
                        <img src={email} alt="email icon"/>
                        <a className="text" href="mailto:softwareashen@gmail.com">softwareashen@gmail.com</a>
                    </div>
                    <div className='informacion' >
                        <img src={github} alt="github icon"/>
                        <a className="text" href="https://github.com/ashensoftware">Github</a>
                    </div>
                    <div className='informacion'>
                        <img src={location} alt="location icon"/>
                        <p className='text'>Medellin, Colombia</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export  default (Contact);
