import Footer from "../../components/Footer"
import NavBar from "../../components/Navbar"
import '../Home/styles.css'

export const Home = () => {
    return (
        <>
            <NavBar />
            <main>

                <div className="callToActionUm">
                    <h1>
                        <span>Realize um teste visual de</span><br />
                        <span>Seu filho de forma prática e</span><br />
                        <span>Rápida aqui.</span>
                    </h1>
                    <h2>Visão Clara, sonhos maiores!</h2>
                    <button>Entrar</button>
                </div>



                <div className="contentResultado">
                    <h2>
                        <span>Como chegamos</span><br />
                        <span>nesse resultado?</span>
                    </h2>
                    <div className="container">
                        <div className="contentIA">
                            <img src="../../" alt="" />
                            <h3>Uso de IA</h3>
                            <p>IA que recomenda a armação mais adequada ao seu rosto</p>
                        </div>
                        <div className="contentJogos">
                            <img src="" alt="" />
                            <h3>Jogos & testes simples</h3>
                            <p>Jogos para identificação possíveis problemas de visão da criança!</p>
                        </div>
                    </div>
                </div>


                <div className="contentGuia">
                    <h2>Acompanhe nossos guias e dicas!</h2>
                    <ul>
                        <li>
                            <div className="contentCard">
                                <img src="" alt="" />
                                <p>5 maneiras de se acostumar com o uso de óculos</p>
                            </div>
                        </li>
                        <li>
                            <div className="contentCard">
                                <img src="" alt="" />
                                <p>Comportamentos que podem indicar a probabilidade de um possível problema visual</p>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className="contentMarketing">
                    <p>
                        <span>Fique por dentro das</span><br />
                        <span>novidades da</span> <br />
                        <span><span className="colorChange">Stellaris</span> em nossas redes </span><br />
                        <span>sociais!</span>
                    </p>
                    <div className="contentRedes">
                        <img src="" alt="Instagram" />
                        <img src="" alt="Linkedin" />
                        <img src="" alt="Github" />
                        <img src="" alt="Tiktok" />
                    </div>
                </div>


                <div className="contentFeedback">
                    <h2>Feedback dos Usuários</h2>
                    <div>
                        <div className="cardFeedback">
                            <h4>Jailson O.</h4>
                            <div><img src="" alt="" /></div>
                            <p>IA muito útil</p>
                            <div>★★★★★</div>
                        </div>
                        <div className="cardFeedback">
                            <h4>Rosane</h4>
                            <div><img src="" alt="" /></div>
                            <p>Bom site</p>
                            <div>★★★★★</div>
                        </div>
                        <div className="cardFeedback">
                            <h4>Aurora</h4>
                            <div><img src="" alt="" /></div>
                            <p>Gostei demais</p>
                            <div>★★★★★</div>
                        </div>
                        <div className="cardFeedback">
                            <h4>Júlio</h4>
                            <div><img src="" alt="" /></div>
                            <p>Ajudou muito!</p>
                            <div>★★★★★</div>

                        </div>
                    </div>
                </div>

                <div className="callToActionDois">
                    <h2>Tá esperando o que?</h2>
                    <p>Venha ver</p>
                    <button>Entrar</button>
                </div>


            </main>
        </>
    )
}
export default Home