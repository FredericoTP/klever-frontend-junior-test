import Header from '../components/Header';
import image from '../assets/shooting-star.svg';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div>
            <img src={ image } alt="shooting-star" />
            <h1>Wish Wallet</h1>
          </div>
          <button>Add Token</button>
        </section>
      </main>
    </div>
  )
}

export default Home;