import './style.css'
import { Link } from 'react-router-dom'
import SideBarPerfil from '../../components/Perfil SideBar';
import foto from '../../assets/images/logoIcone.svg'

const Perfil = () => {

    return (
        <>
            <main className='conteudoPrincipal'>
                <SideBarPerfil/>
                <div className="container01">
                    <div className="usuario01">
                        <img src={foto} />
                        <hr style={{border:"1px solid black"}}/> 
                        <p>Nome do Usuário</p> {/*Puxar do Banco de dados o Nome do Usuário*/}
                    </div>
                    <div className="avateres01">
                        <div className="imagens01">
                            {/*Fila 1*/}
                            <img className="avatar01" src={foto} />
                            <img className="avatar01" src={foto} />
                            <img className="avatar01" src={foto} />
                            {/*Fila 2*/}
                            <img className="avatar01" src={foto} />
                            <img className="avatar01" src={foto} />
                            <img className="avatar01" src={foto} />
                            {/*Fila 3*/}
                            <img className="avatar01" src={foto} />
                            <img className="avatar01" src={foto} />
                            <img className="avatar01" src={foto} />
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