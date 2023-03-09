import { Link } from "react-router-dom";
import image from "../assets/error.svg";
import "../style/NotFound.css";

function NotFound () {
  return (
    <div className="notfound-container">
        <img className="notfound-image" src={ image } alt="404 NotFound" />
        <h2 className="notfound-text notfound-title">Página não encontrada!</h2>
        <p className="notfound-text notfound-p">A página que você procura não existe ou um outro erro ocorreu.</p>
        <Link className="notfound-text notfound-btn" to="/">Página Inicial</Link>
    </div>
  )
}

export default NotFound;