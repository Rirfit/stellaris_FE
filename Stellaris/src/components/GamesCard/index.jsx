import { Link } from "react-router-dom";
import "../GamesCard/style.css";

const GameCard = ({ link, img, title, description }) => {
  return (
    <Link to={link}>
      <div className="card">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default GameCard;
