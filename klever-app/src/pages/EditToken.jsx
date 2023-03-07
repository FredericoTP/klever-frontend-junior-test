import Header from "../components/Header";
import Title from "../components/Title";
import Form from "../components/Form";
import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import '../style/AddEditToken.css';

function EditToken() {
  const { tokenInput, balanceInput, handleClickBack, handleSaveEdit } = useContext(TokenContext);

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
        <section className="edit-btn-container">
          <button
            className="edit-remove-btn"
          >
            Remove
          </button>
          <button
            className="addEdit-save-btn"
            onClick={ handleSaveEdit }
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