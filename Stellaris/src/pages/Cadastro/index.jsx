import "./style.css";
import {Link} from 'react-router-dom'

export const Cadastro = () => {
  return (
    <>
      <div className="body">
        <div className="img">
         
        </div>
        <div className="cadastro">
          <div className="text">
            <h1>Cadastre-se na Stellaris</h1>
          </div>
          <br />
          <div className="alinha">
            <div className="containerForm">
              <form method="post">
                <label className="labelCadastroResponsavel" >Nome do Responsável</label>
                <br />
                <input
                  className="entrada"
                  type="text"
                  placeholder="  Digite seu nome"
                />
                <br />
                <label className="labelCadastroResponsavel" >E-mail</label>
                <br />
                <input
                  className="entrada"
                  type="text"
                  placeholder="  Digite seu E-mail"
                />
                <br />
                <label className="labelCadastroResponsavel" >Senha</label>
                <br />
                <input
                  className="entrada"
                  type="password"
                  placeholder="  Digite sua senha"
                />
                <br />
                <label className="labelCadastroResponsavel">Confirmar senha</label>
                <br />
                <input
                  className="entrada"
                  type="password"
                  placeholder="  Confirme sua senha"
                />
                <br />
                <button className="btnCadastro"><Link to={"/cadastroCrianca"} className="linkParaCadastroCrianca">Avançar</Link></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
