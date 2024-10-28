import './style.css'
import { Link } from 'react-router-dom'
import foto from '../../assets/images/logoIcone.svg'

function SideBarPerfil() {
    
    return (
        <>
            <div className='sideBar'>
                <Link to={"/"} className='linkHome'><div className='btn homebtn' style={{margin:"10px"}}></div></Link>

                <div className='perfil'>
                    <Link className='fotoLink' to={"/perfil"}>
                        <img id="imagemPerfil" src={foto} /> {/*Puxar imagem do Usuário*/}
                    </Link>
                    <p id="nomePerfil">Nome do Usuário</p> {/*Puxar do banco de dados o Nome do usuário*/}
                    <p>Conta Free</p> {/* Puxar do banco de dados se a conta é premium ou não */}
                </div>

                <div className="opcoes">
                    <Link className="seletor" to={"/perfil"}>Perfil</Link>
                    <Link className="seletor" to={"/minhasInformacoes"}>Minhas Informações</Link>
                    <Link className='seletor' to={"/conta"}>Conta</Link>
                    <Link className='seletor' to={"/"}>Adicionar um Stellariano</Link>
                </div>

                <button className='button'><Link className="sairbtn" to={"/"}>Sair</Link></button>
            </div>
        </>
    )
}

export default SideBarPerfil;