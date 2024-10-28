import NavBar from "../../components/Navbar";
import "./style.css";

export const IA = () => {
  return (
    <>
      <div className="pagina">
        <NavBar />
        <div className="paginaIA">
          <h1>Abra sua câmera ou selecione um arquivo existente.</h1>
          <div className="botoes">
            <button>ARQUIVO</button>
            <button>CÂMERA</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default IA;
