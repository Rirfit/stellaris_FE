import { Link } from 'react-router-dom'
import SideBarPerfil from '../../components/Perfil SideBar'
import './style.css'

const Conta = () => {
    return (
        <>
            <SideBarPerfil />
            <div className="container">
                <h1>Informações da Conta</h1>

                <form action="post">
                    <label>E-mail</label>
                    <input type="email" name="email" value={{/*Puxar o e-mail cadastrado*/ }} />

                    <label>Senha</label>
                    <input type="password" name="senha" value={{/*Puxar a senha cadastrado*/ }} />

                    <label>CPF</label>
                    <input type="number" name="numeber" value={{/*Puxar o CPF cadastrado */ }} />
                </form>

                <button><Link className='editarbtn' to={"/alterarDados"}>Editar</Link></button>
            </div>
        </>
    )
}

export default Conta