import '../Navbar/style.css'
import { Link } from 'react-router-dom'
import foto from '../../assets/react.svg'

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

            <div className="logo"><img src={foto} alt="" /></div>
<<<<<<< HEAD

            <abbr title="Home"><Link to={"/"}><div className='btn homebtn'></div></Link></abbr> <p className='paragrafoBtn'>Home</p>
            <abbr title="Sobre Nós"><Link to={""}><div className='btn sobreNosbtn'></div></Link></abbr> <p className='paragrafoBtn'>Sobre Nós</p>
            <abbr title="IA"><Link to={""}><div className='btn iabtn'></div></Link></abbr> <p className='paragrafoBtn'>IA</p>
            <abbr title="Jogos"><Link to={""}><div className='btn jogosbtn'></div></Link></abbr> <p className='paragrafoBtn'>Jogos</p>
            <abbr title="Blog"><Link to={""}><div className='btn blog'></div></Link></abbr> <p className='paragrafoBtn'>Blog</p>
            <abbr title="Meu Perfil"><Link to={""}><div className='btn meuPerfilbtn'></div></Link></abbr> <p className='paragrafoBtn'>Meu Perfil</p>
=======
            <Link className="btn homebtn" to={"/"}></Link> <p className='paragrafoBtn'>Home</p>
            <Link className="btn sobreNosbtn" to={"/sobreNos"}></Link> <p className='paragrafoBtn'>Sobre Nós</p>
            <Link className="btn iabtn" to={"/escolhaIA"}></Link> <p className='paragrafoBtn'>IA</p>
            <Link className="btn jogosbtn" to={"/jogos"}></Link> <p className='paragrafoBtn'>Jogos</p>
            <Link className="btn blog" to={"/blogs"}></Link> <p className='paragrafoBtn'>Blog</p>
            <Link className="btn meuPerfilbtn" to={"/perfil"}to={"/login"}></Link> <p className='paragrafoBtn'>Meu Perfil</p>
>>>>>>> b5330ce681391006597cb9fb4165379498664ed5
        </div>
    </nav>
    )
}
<button><Link to={"/"}>concluir</Link></button>

export default NavBar