import { useContext } from "react";
import TokenContext from "../context/TokenContext";

function Form() {
  const { tokenInput, balanceInput, erro } = useContext(TokenContext);

  return (
    <form>
      <div>
        <label htmlFor="token">Token</label>
        <input
          id="token"
          type="text"
          value={ tokenInput.value }
          onChange={ tokenInput.handleChange}
          placeholder="KLV"
        />
        {
          erro && <small>Token já existente!</small>
        }
      </div>
      <div>
        <label htmlFor="balance">Balance</label>
        <input
          id="balance"
          type="text"
          value={ balanceInput.value }
          onChange={ balanceInput.handleChange}
          placeholder="10,250.50"
        />
      </div>
      {
        (tokenInput.value === "" || balanceInput.value === "") && <small>Preencha todos os campos!</small>
      }
    </form>
  )
}

export default Form;