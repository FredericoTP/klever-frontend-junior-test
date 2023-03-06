import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import '../style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-box">
        <section className="home-title-container">
          <Title />
          <Link className="home-title-btn" to="/add-token" >Add Token</Link>
        </section>
      </main>
    </div>
  )
}

export default Home;