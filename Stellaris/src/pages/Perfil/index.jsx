import './style.css'
import { Link } from 'react-router-dom'
import SideBarPerfil from '../../components/Perfil SideBar';

const Perfil = () => {

    return (
        <>
            <SideBarPerfil />
            <div className="container">

                <div className="usuario">
                    <img src="" />
                    <p>Nome do Usuário</p> {/*Puxar do Banco de dados o Nome do Usuário*/}
                </div>

                <div className="avateres">
                    <div className="imagens">
                        {/*Fila 1*/}
                        <img className="avatar" src="" />
                        <img className="avatar" src="" />
                        <img className="avatar" src="" />

                        {/*Fila 2*/}
                        <img className="avatar" src="" />
                        <img className="avatar" src="" />
                        <img className="avatar" src="" />

                        {/*Fila 3*/}
                        <img className="avatar" src="" />
                        <img className="avatar" src="" />
                        {/*Icon de camerâ com sinal de +*/} {/*link para adicionar uma foto pessoal*/}
                    </div>
                </div>

                <button><Link className='confirmarbtn' to={"/perfil"}>Confirmar</Link></button>

            </div>
        </>
    )
}

export default Perfil;