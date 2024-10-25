import Footer from "../../components/Footer"
import NavBar from "../../components/Navbar"
import '../Home/styles.css'

export const Home = () => {
    return (
        <>
        <NavBar/>
        <h1>Olá, mundo</h1>
        <div className="callToActionUm">
            <h1>Realize um teste visual de seu filho de forma prática e rápida aqui</h1>
            <h2>Visão Clara, sonhos maiores</h2>
            <button>Entrar</button>
        </div>

        <div className="contentResultado">
            <h2>Como chegamos nesse resultado?</h2>
            <div className="contentIA">
                <img src="" alt="" />
                <h3></h3>
                <p>IA que recomenda a armação mais adequada ao seu rosto</p>
            </div>

            <div className="contentJogos">
                <img src="" alt="" />
                <h3>Jogos & testes simples</h3>
                <p>Jogos para identificação possíveis problemas de visão da criança!</p>
            </div>

            <div className="contentGuia">
                <ul>
                    <li>
                        <div className="contentCard"></div>
                    </li>
                    <li>
                        <div className="contentCard"></div>
                    </li>
                </ul>
                
            </div>

            <div className="contentMarketing">
                <p>Fique por dentro das novidades da 
                Stellaris em nossas redes sociais!</p>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="contentFeedback">
                <h2>Feedback dos Usuários</h2>
                
            </div>
            <div className="callToActionDois">
                <h2>Tá esperando o que?</h2>
                <p>Venha ver</p>
                <button>Entrar</button>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default Home