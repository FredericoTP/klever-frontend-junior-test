import image from '../assets/shooting-star.svg';
import '../style/Title.css';

function Title() {
  return (
    <div className="title-container">
      <img
        data-testid="title-image"
        className="title-image"
        src={ image } alt="shooting-star"
      />
      <h1
        data-testid="title-h1"
        className="title-h1"
      >
        Wish Wallet
      </h1>
    </div>
  )
}

export default Title;