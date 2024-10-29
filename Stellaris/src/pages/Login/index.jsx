import './style.css'
import { Link } from 'react-router-dom'
import intersect from '../../assets/images/Login/intersect.svg'
import fundoEstrela from '../../assets/images/Login/fundoLogin.svg'

export const Login = () => {
    return (
        <>
            <div className="backgroundWrapperLogin">
                <div className="intersect">
                    <div className='fundoEstrelaLogin'></div>
                </div>
                <div className="login">
                    <h1>Fazer login!</h1>
                    <h2>Visão clara, sonhos maiores!</h2>
                    <div className="containerFormLogin">
                        <form method="post">
                            <li>
                                <label>E-mail</label>
                                <input type="email" placeholder='Digite seu e-mail' />
                            </li>
                            <li>
                                <label>Senha</label>
                                <input type="password" placeholder="Digite sua senha" />
                            </li>
                        </form>
                        <p>Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                    <button className='botaoEntrarLogin'><Link to={"/"}>Login</Link></button>
                </div>
            </div>
        </>
    );
};
export default Login