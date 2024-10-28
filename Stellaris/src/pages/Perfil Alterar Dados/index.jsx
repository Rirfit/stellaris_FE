import SideBarPerfil from '../../components/Perfil SideBar'
import { Link } from 'react-router-dom'
import './style.css'

const AlterarDados = () => {
    return (
        <>
            <main className='conteudoPrincipalEditarConta'>
                <SideBarPerfil />
                <div className="containerEditarConta">
                    <h1>Editar Conta</h1>
                    <form action="post" className='formularioEditarPerfil'>
                        <label className='labelsEditarPerfil'>E-mail</label>
                        <input type="email" name="email" placeholder={"Email já cadastrado vai aqui"} className='inputEmailEditarPerfil' />
                        <label className='labelsEditarPerfil'>Cofirmar novo E-mail</label>
                        <input type="email" name="email" placeholder="Confirmar e-mail" className='inputConfirmaEmailEditarPerfil' />
                        <label className='labelsEditarPerfil'>Senha</label>
                        <input type="password" name="senha" placeholder={"Puxar senha já cadastrada aqui"} className='inputSenhaEditarPerfil' />
                        <label className='labelsEditarPerfil'>Cofirmar nova Senha</label>
                        <input type="password" name="senha" placeholder="Confirmar senha" className='inputConfirmaSenhaEditarPerfil'/>
                    </form>
                    <button className="salvarbtnEditarConta">Salvar</button> {/*Deixar um pouco transparente se não tiver alterado nada*/}
                </div>
            </main>
        </>
    )
}

export default AlterarDados