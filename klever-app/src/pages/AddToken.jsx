import Header from "../components/Header";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function AddToken() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Title />
        </section>
        <section>
          <h2>Add Token</h2>
          <Link to="/">Voltar</Link>
        </section>
      </main>
    </div>
  )
}

export default AddToken;