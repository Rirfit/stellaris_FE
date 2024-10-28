import "./style.css"
import { Link } from 'react-router-dom'


const CallToActionDois = () => {
    return(
        <div className="callToActionDois">
                    <h2>Tá esperando o que?</h2>
                    <p>Venha ver</p>
                    <button><Link to={"/cadastro"} className="linkDaHomeParaCadastro02">Entrar</Link></button>
                </div>
    )
}

export default CallToActionDois
