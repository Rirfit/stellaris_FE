import '../Navbar/style.css'
import { Link } from 'react-router-dom'
import logoEscrita from '../../assets/images/logoEscrito.svg'

const NavBar =()=>{

    return(
        <nav>
        <input type="checkbox" id="sidebar-active"/>
        <label htmlFor="sidebar-active" className="open-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="5em" viewBox="0 0 24 24"><path fill="black" d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"/></svg>
        </label>


        <label htmlFor="sidebar-active" id="overlay"></label>

        <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </label>

            <div className="logo"><img src={logoEscrita} alt="logo da Stellaris" className='logoImg' /></div>

            <abbr title="Home"><Link to={"/"}><div className='btn homebtn'></div></Link></abbr> <p className='paragrafoBtn'>Home</p>
            <abbr title="Sobre Nós"><Link to={""}><div className='btn sobreNosbtn'></div></Link></abbr> <p className='paragrafoBtn'>Sobre Nós</p>
            <abbr title="IA"><Link to={""}><div className='btn iabtn'></div></Link></abbr> <p className='paragrafoBtn'>IA</p>
            <abbr title="Jogos"><Link to={"/jogos"}><div className='btn jogosbtn'></div></Link></abbr> <p className='paragrafoBtn'>Jogos</p>
            <abbr title="Blog"><Link to={"/blog"}><div className='btn blog'></div></Link></abbr> <p className='paragrafoBtn'>Blog</p>
            <abbr title="Meu Perfil"><Link to={""}><div className='btn meuPerfilbtn'></div></Link></abbr> <p className='paragrafoBtn'>Meu Perfil</p>
        </div>
    </nav>
    )
}

export default NavBar