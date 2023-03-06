import Header from '../components/Header';
import image from '../assets/shooting-star.svg';
import '../style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-box">
        <section className="home-title-container">
          <div className="home-title-box">
            <img className="home-image" src={ image } alt="shooting-star" />
            <h1 className="home-title">Wish Wallet</h1>
          </div>
          <button className="home-title-btn">Add Token</button>
        </section>
      </main>
    </div>
  )
}

export default Home;