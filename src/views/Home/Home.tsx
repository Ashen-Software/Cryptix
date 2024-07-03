import About from '../../componentes/About/About'
import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import './home.css'


function Home() {
  return (
    <>
    <div className="container">
    <div id='home' className='home'>
    <Header/>
    </div>
    <div id='about' className='about'>
      <About/>
    </div>
    <div id='contact' className='contact'>
      <p>Este es el contact</p>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home