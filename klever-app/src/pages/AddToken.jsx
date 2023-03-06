import Header from "../components/Header";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../context/TokenContext";

function AddToken() {
  const { tokenInput, balanceInput, handleClickSave } = useContext(TokenContext);

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
        <section>
          <div>
            <label htmlFor="token">Token</label>
            <input
              id="token"
              type="text"
              value={ tokenInput.value }
              onChange={ tokenInput.handleChange}
            />
          </div>
          <div>
            <label htmlFor="balance">Balance</label>
            <input
              id="balance"
              type="text"
              value={ balanceInput.value }
              onChange={ balanceInput.handleChange}
            />
          </div>
        </section>
        <section>
          <button
            onClick={ handleClickSave }
            disabled={ tokenInput.value === "" || balanceInput.value === "" }
          >
            Save
          </button>
        </section>
      </main>
    </div>
  )
}

export default AddToken;