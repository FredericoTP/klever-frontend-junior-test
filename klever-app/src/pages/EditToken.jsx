import Header from "../components/Header";
import Title from "../components/Title";
import Form from "../components/Form";
import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import '../style/AddToken.css';

function EditToken() {
  const { tokenInput, balanceInput, handleClickBack } = useContext(TokenContext);

  return (
    <div className="addtoken-container">
      <Header />
      <main className="addtoken-main">
        <section>
          <Title />
        </section>
        <section className="addtoken-subtitle-container">
          <h2 className="addtoken-subtitle">Add Token</h2>
          <button
            className="addtoken-back-btn"
            onClick={handleClickBack}
          >
            Voltar
          </button>
        </section>
        <Form />
        <section className="addtoken-btn-container">
          <button
            className="addtoken-save-btn"
          >
            Remove
          </button>
          <button
            className="addtoken-save-btn"
            disabled={tokenInput.value === "" || balanceInput.value === ""}
          >
            Save
          </button>
        </section>
      </main>
    </div>
  )
}

export default EditToken;