import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import '../style/Form.css';

function Form() {
  const { tokenInput, balanceInput, erro } = useContext(TokenContext);

  return (
    <form className="form-container">
      <div className="form-box">
        <label className="form-label" htmlFor="token">Token</label>
        <input
          className="form-input"
          id="token"
          type="text"
          value={ tokenInput.value }
          onChange={ tokenInput.handleChange}
          placeholder="KLV"
        />
        {
          erro && <small className="form-small">Token já existente!</small>
        }
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="balance">Balance</label>
        <input
          className="form-input"
          id="balance"
          type="text"
          value={ balanceInput.value }
          onChange={ balanceInput.handleChange}
          placeholder="10,250.50"
        />
        {
          (tokenInput.value === "" || balanceInput.value === "") && <small className="form-small">Preencha todos os campos!</small>
        }
      </div>
    </form>
  )
}

export default Form;