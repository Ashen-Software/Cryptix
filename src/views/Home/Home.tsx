import About from '../../componentes/About/About'
import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header/Header'
import Contact from '../../componentes/Contact/Contact'
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
      <Contact/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home