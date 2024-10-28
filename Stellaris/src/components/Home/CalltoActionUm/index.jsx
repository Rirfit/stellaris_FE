import '../CalltoActionUm/style.css'
import { Link } from 'react-router-dom'

const CalltoActionUm = () =>{
    return(
        <div className="callToActionUm">
        <div className="texto">
            <h1 id="home">
                <span>Realize um teste visual de</span><br />
                <span>Seu filho de forma prática e</span><br />
                <span>Rápida aqui.</span>
            </h1>
            <h2>Visão Clara, sonhos maiores!</h2>
            <button><Link to={"/cadastro"} className='linkDaHomeParaCadastro'>Entrar</Link></button>
        </div>
    </div>

    )
} 

export default CalltoActionUm