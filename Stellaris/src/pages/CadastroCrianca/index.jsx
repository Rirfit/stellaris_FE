import "./style.css";
import { Link } from "react-router-dom";

const CadastroCrianca = () => {
  return (
    <>
      {/* <div className='body'>
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
            </div> */}

      <div className="bodyCadastroCrianca">
        <div className="imgCadastroCrianca"></div>
        <div className="cadastroCadastroCrianca">
          <div className="textCadastroCrianca">
            <h1>Cadastro do Stellariano</h1>
          </div>
          <br />
          <div className="alinhaCadastroCrianca">
            <div className="containerFormCadastroCrianca">
              <form method="post">
                <label className="labelCadastroCrianca">
                  Nome do Stellarino
                </label>
                <br />
                <input
                  className="entrada"
                  type="text"
                  placeholder="  Digite seu nome"
                />
                <br />
                <label className="labelCadastroCrianca">Idade</label>
                <br />
                <input
                  className="entradaCadastroCrianca"
                  type="text"
                  placeholder="  Digite sua idade"
                />
                <br />
                <label className="labelCadastroCrianca">Sexo</label>
                <br />
                <input
                  className="entrada"
                  type="text"
                  placeholder="  Digite seu sexo"
                />
                <br />
                <button className="btnCadastro">
                  <Link
                    to={"/"}
                    className="linkParaCadastroCrianca"
                  >
                    Avançar
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroCrianca;
