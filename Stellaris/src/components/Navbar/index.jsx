import '../Navbar/style.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify-icon/react';
import foto from '../../assets/react.svg'

const NavBar =()=>{
    return(
        <nav className="navbar">
            <div className="logo"><img src={foto} alt="" /></div>
            <Link className='btn home'></Link>
            <Link className='btn sobreNos'></Link>
            <Link className='btn ia'></Link>
            <Link className='btn jogos'></Link>
            <Link className='btn blog'></Link>
            <Link className='btn cadastro'></Link>
        </nav>
    )
}

export default NavBar