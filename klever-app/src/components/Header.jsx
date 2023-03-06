import image from '../assets/logo.svg';
import '../style/Header.css';

function Header() {
  return (
    <header className="header-container">
      <img className="header-logo" src={ image } alt="klever-logo" />
    </header>
  )
}

export default Header;