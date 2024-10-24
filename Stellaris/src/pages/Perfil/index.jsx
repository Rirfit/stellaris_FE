import './style.css'
import { Link } from 'react-router-dom'

const Perfil = (props) => {

    return (
        <>
            <div className='sideBar'>
                <Link className="btn homeBtn" to={"/"}> Home</Link>

                <div className='perfil'>
                    <Link className='fotoLink' to={"/perfil"}>
                        <img id="imagemPerfil" src="./IMG/" />
                    </Link>
                    <p id="nomePerfil">Nome do Usuário</p>
                    <p>Conta {props.status}</p>
                </div>

                <div className="opcoes">
                    <Link className="seletor" to={"/perfilInformacoes"}>Minhas informações</Link>
                    <Link className="seletor" to={"/perfilConta"}>Conta</Link>
                    <Link className='seletor' to={"/perfilAlterar"}>Aletrar dados</Link>
                </div>

                <button><Link className="btn" to={"/"}>Sair</Link></button>
            </div>

            <Card>
                <div className="usuario">
                    <img src=""/>
                    <p>Nome do Usuário</p>
                </div>
                <div className="avateres">

                </div>
                <button><Link className='btn' to={"/perfil"}>Confirmar</Link></button>
            </Card>

        </>
    )
}

export default Perfil;