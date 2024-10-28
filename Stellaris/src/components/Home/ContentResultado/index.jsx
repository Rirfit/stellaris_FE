import '../ContentResultado/style.css'
import JogoIcon from '../../../assets/icons/home/JogoIcon.svg'
import IAIcon from '../../../assets/icons/home/IAIcon.svg'
import { Link } from 'react-router-dom'
const ContentResultado = () =>{
    return(
        <div className="contentResultado">
        <h2 className="jogosIA">
            <span>Como chegamos</span><br />
            <span>nesse resultado?</span>
        </h2>
        <div className="container">
            <div className="contentIA">
                <Link to={"/ia"}><img src={IAIcon} alt="Icone de robô" className='imgIcon' /></Link>
                <h3>Uso de IA</h3>
                <p><span>IA que recomenda a</span>
                <span> armação mais adequada ao seu rosto</span></p>
            </div>
            <div className="contentJogos">
                <Link to={"/jogos"}><img src={JogoIcon} alt="" className='imgIcon' /></Link>
                <h3>Jogos & testes simples</h3>
                <p><span>Jogos para identificação</span> <span>possíveis problemas de visão da criança!</span></p>
            </div>
        </div>
    </div>
    )
}
export default  ContentResultado;  
