// import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import GameCard from "../../components/GamesCard";
import Vid_img from "./Img/Vid.png";
import Dec_img from "./Img/Dec.png";
import "../SelecaoJogos/style.css";

export const Jogos = () => {
  const cardTitles = [
    "Desafio Das Cores",
    "Caça Aos Detalhes",
    "Letra Secreta",
    "Seguindo o movimento",
    "Desafio Foco e Desfoque:",
    "Desafio da Velocidade:",
  ];

  const cardDescriptions = [
    "Você está pronto para uma missão divertida cheia de cores? No nosso jogo de Quebra-Cabeça Colorido, você vai criar padrões e imagens incríveis!",
    "Olá, detetive!  Prepare-se para o Jogo de Distinção de Detalhes, onde sua missão é encontrar objetos e detalhes escondidos em imagens coloridas!",
    'Pequeno explorador das letras! Você está prestes a entrar no mundo do "Letra Secreta", um jogo super divertido para ajudar você a reconhecer letras de forma rápida e emocionante!',
    "Prepare-se para o Jogo de Seguir o Movimento! Aqui, você vai se divertir seguindo uma figura que se move na tela.",
    "Pequeno explorador!  Você está prestes a embarcar em uma aventura visual com o Jogo de Ajuste de Foco! Aqui, você vai ajudar a identificar objetos em imagens que mudam de foco.",
    'Velocista visual! Prepare-se para o "Desafio da Velocidade", um jogo empolgante que vai testar sua rapidez em reconhecer imagens e padrões!',
  ];

  const cardImages = ["/", "/", "/", "/", "/", "/"];

  const cardLinks = [
    "/",
    "/jogos",
    "/blogs",
    "/cadastro",
    "/login",
    "/cadastroCrianca",
  ];

  return (
    <>
      <NavBar />
      <div className="gamificacao">
        <img src={Dec_img} className="dec" />
        <h1 className="title">Jogos</h1>
        <img className="Video" src={Vid_img} />
        <div className="cards">
          {cardTitles.map((item, index) => (
            <GameCard
              img={cardImages[index]}
              title={cardTitles[index]}
              description={cardDescriptions[index]}
              link={cardLinks[index]}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Jogos;
