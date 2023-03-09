import { Link } from "react-router-dom";
import image from "../assets/error.svg"

function NotFound () {
  return (
    <div>
      <div>
        <img src={ image } alt="404 NotFound" />
        <h2>Página não encontrada!</h2>
        <p>A página que você procura não existe ou um outro erro ocorreu.</p>
        <Link to="/">Página Inicial</Link>
      </div>
    </div>
  )
}

export default NotFound;