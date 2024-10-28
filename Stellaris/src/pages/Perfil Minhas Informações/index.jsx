import SideBarPerfil from '../../components/Perfil SideBar'
import './style.css'

const MinhasInformacoes = () => {

    return (
        <>
            <SideBarPerfil />
            <main className='conteudoPrincipalMinhasInfos'> 
                <div className="containerMinhasInfo">
                    <h1 className='tituloMinhasInfo'>Pessoas Logadas</h1>
                    <form action="post" className='formMinhasInfo'>

                        <div className="responsavelMinhasInfo">
                            <label className='nomeResponsavelMinhasInfo'>Nome do Responsável 01</label>
                            <input type="text" id="nome" value={"Nome do Responsável"} className='nomeResponsavelInputMinhasInfo' />
                            <label className='idadeResponsavelMinhasInfo'>Idade</label>
                            <input type="number" id="idade" value={44} className='idadeResponsavelInputMinhasInfo'/> {/*idade do responsável*/}
                        </div>

                        <div className="crianca">
                            <label className='nomeDaCriancaMinhasInfo'>Nome do Stellariano 01</label>
                            <input type="text" id="nome" value={"Nome da criança"} className='nomeDaCriancaInputMinhasInfo' />
                            <label className='idadeCriancaMinhasInfo'>Idade</label>
                            <input type="number" id="idade" value={8} className='idadeCriancaInputMinhasInfo' /> {/*Puxar a Idade da Criança*/}
                        </div>

                        <div className="crianca">
                            <label className='nomeDaCriancaMinhasInfo'>Nome do Stellariano 02</label>
                            <input type="text" id="nome" value={"Nome da criança"} className='nomeDaCriancaInputMinhasInfo' />
                            <label className='idadeCriancaMinhasInfo'>Idade</label>
                            <input type="number" id="idade" value={7} className='idadeCriancaInputMinhasInfo' /> {/*Puxar a Idade da Criança*/}
                        </div>

                        <div className="crianca">
                            <label className='nomeDaCriancaMinhasInfo'>Nome do Stellariano 03</label>
                            <input type="text" id="nome" value={"Nome da criança"} className='nomeDaCriancaInputMinhasInfo' />
                            <label className='idadeCriancaMinhasInfo'>Idade</label>
                            <input type="number" id="idade" value={5} className='idadeCriancaInputMinhasInfo' /> {/*Puxar a Idade da Criança*/}
                        </div>

                    </form>
                   {/*  <button>Confirmar Alteração</button>Deixar um pouco transparente se não tiver alterado os dados*/}
                </div>
            </main>
        </>
    )
}

export default MinhasInformacoes