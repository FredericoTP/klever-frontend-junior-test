import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import TokenList from '../components/TokenList';
import '../style/Home.css';
import image from '../assets/empty-wallet.svg';

function Home() {
  const storage = JSON.parse(localStorage.getItem('tokens'));

  return (
    <div className="home-container">
      <Header />
      <main className="home-box">
        <section className="home-title-container">
          <Title />
          <Link className="home-title-btn" to="/add-token" >Add Token</Link>
        </section>
        <section>
          {
            (!storage || storage.length === 0) && (
              <div>
                <img src={ image } alt="empty-wallet" />
                <p>Adicione algum Token!</p>
              </div>
            )
          }
          {
            (!!storage && storage.length > 0) && <TokenList />
          }
        </section>
      </main>
    </div>
  )
}

export default Home;