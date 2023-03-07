import Header from "../components/Header";
import Title from "../components/Title";
import Form from "../components/Form";
import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import '../style/AddEditToken.css';

function AddToken() {
  const { tokenInput, balanceInput, handleClickSave, handleClickBack } = useContext(TokenContext);

  return (
    <div className="addEdit-container">
      <Header />
      <main className="addEdit-main">
        <section>
          <Title />
        </section>
        <section className="addEdit-subtitle-container">
          <h2 className="addEdit-subtitle">Edit Token</h2>
          <button
            className="addEdit-back-btn"
            onClick={handleClickBack}
          >
            Voltar
          </button>
        </section>
        <Form />
        <section className="addtoken-btn-container">
          <button
            className="addEdit-save-btn"
            onClick={handleClickSave}
            disabled={tokenInput.value === "" || balanceInput.value === ""}
          >
            Save
          </button>
        </section>
      </main>
    </div>
  )
}

export default AddToken;