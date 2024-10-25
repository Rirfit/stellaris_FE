import "../Footer/style.css";
import iconeImg from "../../assets/images/logoIcone.svg";

const Footer = () => {
  return (
      <footer className="pe">
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

          <div className="desc_redes">
            <h4>Mapa do Site</h4>
            <ul className="mapaSite">
              <li>
                <a href="#">link01</a>
              </li>
              <li>
                <a href="#">link02</a>
              </li>
              <li>
                <a href="#">link03</a>
              </li>
              <li>
                <a href="#">link04</a>
              </li>
              <li>
                <a href="#">link05</a>
              </li>
            </ul>
          </div>

          <div className="desc_redes">
            <h4>Sobre o Projeto</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              distinctio enim deserunt corrupti facere neque, asperiores tempore
              sit nulla autem explicabo nam delectus vero, maiores et. Odit
              quidem natus quaerat.
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
      </footer>
  );
};

export default Footer;
