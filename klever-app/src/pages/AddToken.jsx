import Header from "../components/Header";
import Title from "../components/Title";
import Form from "../components/Form";
import { useContext } from "react";
import TokenContext from "../context/TokenContext";

function AddToken() {
  const { tokenInput, balanceInput, handleClickSave, handleClickBack } = useContext(TokenContext);

  return (
    <div className="addtoken-container">
      <Header />
      <main className="">
        <section>
          <Title />
        </section>
        <section>
          <h2>Add Token</h2>
          <button onClick={ handleClickBack }>Voltar</button>
        </section>
        <Form />
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