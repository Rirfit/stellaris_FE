import './style.css'
import  { Link } from 'react-router-dom'

export const Cadastro = () => {

    return (
        <>
            <div className="cadastro">

                <h1>Cadastre-se</h1>

                <div className="containerForm">

                    <form method="post">
                        <label>Nome do responsável</label>
                        <input type="text" placeholder="Digite seu nome" />

                        <label>CPF</label>
                        <input type="number" placeholder="Digite seu CPF" />

                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail" />

                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" />

                        <label>Confirmar senha</label>
                        <input type="password" placeholder="Confirme sua senha" />
                    </form>

                </div>

                <button><Link to={"/cadastroCrianca"}>Avançar</Link></button>

            </div>
        </>
    )
}

export default Cadastro;
