import './style.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <div className="login">

                <h1>Fazer login!</h1>
                <h2>Visão claro, sonhos maiores!</h2>

                <div className="containerForm">

                    <form method="post">
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu email" />

                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </form>

                    <p>Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>

                </div>

                <button><Link to={"/"}>Login</Link></button>

            </div>
        </>
    )
}
export default Login