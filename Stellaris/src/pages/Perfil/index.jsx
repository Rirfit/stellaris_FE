import './style.css'
import { Link } from 'react-router-dom'
import SideBarPerfil from '../../components/Perfil SideBar';
import foto1 from '../../assets/images/logoIcone.svg'

const Perfil = () => {

    return (
        <>
            <main className='conteudoPrincipal'>
                <SideBarPerfil/>
                <div className="container01">
                    <div className="usuario01">
                        <img src={foto1} />
                        <hr style={{border:"1px solid black"}}/> 
                        <p>Nome do Usuário</p> {/*Puxar do Banco de dados o Nome do Usuário*/}
                    </div>
                    <div className="avateres01">
                        <div className="imagens01">
                            {/*Fila 1*/}
                            <img className="avatar01" src={foto1} />
                            <img className="avatar01" src={foto1} />
                            <img className="avatar01" src={foto1} />
                            {/*Fila 2*/}
                            <img className="avatar01" src={foto1} />
                            <img className="avatar01" src={foto1} />
                            {/*Fila 3*/}
                            <img className="avatar01" src={foto1} />
                            <img className="avatar01" src={foto1} />
                            <img className="avatar01" src={foto1} />
                            {/*Icon de camerâ com sinal de +*/} {/*link para adicionar uma foto pessoal*/}
                        </div>
                    </div>
                    <button className='confirmarbtn01'>Confirmar</button>
                </div>
            </main>
        </>
    )
}

export default Perfil;