import './style.css'
import { Link } from 'react-router-dom'


const CadastroCrianca = () => {

    return (
        <>
            <div className="cadastroCrianca">

                <h1>Stellariano</h1>

                <div className="containerForm">

                    <form method="post">
                        <label>Nome do Stellariano</label>
                        <input type="text" placeholder="Nome da criança" />

                        <label>Idade do Stellariano</label>
                        <input type="text" placeholder="Idade da criança" />

                        <label>Genêro do Stellariano</label>
                        <input type="text" placeholder="Genêro da criança" />
                    </form>

                </div>

                <button><Link to={"/"}>Concluir</Link></button>

            </div>
        </>
    )
}

export default CadastroCrianca;