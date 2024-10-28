import { Link } from 'react-router-dom'
import SideBarPerfil from '../../components/Perfil SideBar'
import './style.css'

const Conta = () => {
    return (
        <>
            <SideBarPerfil />
            <main className='conteudoPrincipalConta'>
                <div className="containerConta">
                    <h1>Informações da Conta</h1>
                    <form action="post" className='formularioPeriflConta'>
                        <label className='labelsPerfil'>E-mail</label>
                        <input type="email" name="email" className='inputEmailConta' value={"Email do responsável"} />
                        <label  className='labelsPerfil'>Senha</label>
                        <input type="password" name="senha" className='inputSenhaConta' value={"Senha atual"} />
                        <label  className='labelsPerfil'>CPF</label>
                        <input type="text" name="numeber" className='inputCpfConta' value={"545.989.786-90"} />
                    </form>
                    <Link className='editarbtnConta' to={"/alterarDados"}>Editar</Link>
                </div>
            </main>
        </>
    )
}

export default Conta