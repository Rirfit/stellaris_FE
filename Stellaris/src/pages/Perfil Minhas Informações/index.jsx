import SideBarPerfil from '../../components/Perfil SideBar'
import './style.css'

const MinhasInformacoes = () => {

    return (
        <>
            <SideBarPerfil />
            <div className="container">
                <h1>Minhas Informações</h1>

                <form action="post">
                    <div className="resposponsavel">
                        <label>Nome do Responsável</label>
                        <input type="text" id="nome" value={{/*Puxar o Nome do Responsavel*/ }} />

                        <label>Idade</label>
                        <button type='button' id='decrementar'></button>
                        <input type="number" id="idade" value={{/*Puxar a Idade do Responsavel*/ }} />
                        <button type='button' id='incrementar'></button>
                    </div>

                    <div className="crianca">                        
                        <label>Nome do Stellariano</label>
                        <input type="text" id="nome" value={{/*Puxar o Nome da Criança*/ }} />

                        <label>Idade</label>
                        <button type='button' id='decrementar'></button>
                        <input type="number" id="idade" value={{/*Puxar a Idade da Criança*/ }} />
                        <button type='button' id='incrementar'></button>
                    </div>
                </form>

                <button>Confirmar Alteração</button> {/*Deixar um pouco transparente se não tiver alterado os dados*/}
            </div>
        </>
    )
}

export default MinhasInformacoes