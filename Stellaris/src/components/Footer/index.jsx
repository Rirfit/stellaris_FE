import "../Footer/style.css";
import iconeImg from "../../assets/images/logoIcone.svg";

const Footer = () => {
  return (
    <footer className="rodape">
      <div className="pe">
        <div className="contatosEproa">
          <img src={iconeImg} alt="Logo" />

          <div className="email">
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
              alt="logo do email"
            />
            <p>Stellaris@gmail.com</p>
          </div>
          <div className="proa">
            <img
              src="https://www.casasbahia-imagens.com.br/criacao/03-hotsite/2022/05-mai/fundacao/images/logo-proa.png"
              alt="logo do proa"
            />
            <p>Projeto do Instituto Proa</p>
          </div>
        </div>

        <hr className="divisao" />

        <div className="listaMapaSite">
          <h4>Mapa do Site</h4>
          <ul className="mapaSite">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#jogosIA">IA</a>
            </li>
            <li>
              <a href="#jogosIA">Jogos</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#feedback">Feedbacks</a>
            </li>
          </ul>
        </div>

        <hr className="divisao" />

        <div className="descRedes">
          <h4>Sobre o Projeto</h4>
          <p>
          A Stellaris, empresa dedicada à inovação, integra a tecnologia com a saúde visual. Nosso objetivo é transformar a experiência visual, tecnologia com cuidados de saúde ocular. Priorizamos especialmente a saúde visual das crianças, oferecendo jogos para descontrair e ao mesmo tempo alertar possíveis problemas, buscando sempre a melhora de vida dos pequenos.
          </p>
          <div className="icones">
            <a href="#" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
                alt="Icone Instagram"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3256/3256016.png"
                alt="Icone tiktok"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504942.png"
                alt="Icone Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="direitosAutorais">
        <hr />
        <p>Todos direitos reservados ©Stellaris2024</p>
      </div>
    </footer>
  );
};

export default Footer;
