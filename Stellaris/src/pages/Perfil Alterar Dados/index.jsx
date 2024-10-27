import SideBarPerfil from '../../components/Perfil SideBar'
import { Link } from 'react-router-dom'
import './style.css'

const AlterarDados = () => {
    return (
        <>
            <SideBarPerfil />
            <div className="contain">
                <h1>Informações da Conta</h1>

                <form action="post">
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder={{/*Puxar e-mail cadastrado*/ }} />

                    <label>Cofirmar e-mail</label>
                    <input type="email" name="email" placeholder="Confirmar e-mail" />

                    <label>Senha</label>
                    <input type="password" name="senha" placeholder={{/*Puxar e-mail cadastrado*/ }} />

                    <label>Cofirmar Senha</label>
                    <input type="password" name="senha" placeholder="Confirmar senha" />
                </form>

                <button><Link className="salvarbtn" to="/alterarDados">Salvar</Link></button> {/*Deixar um pouco transparente se não tiver alterado nada*/}

            </div>
        </>
    )
}

export default AlterarDados