import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import '../style/Form.css';

function Form() {
  const { tokenInput, balanceInput, erro } = useContext(TokenContext);

  return (
    <form className="form-container">
      <div className="form-box">
        <label data-testid="label-token" className="form-label" htmlFor="token">Token</label>
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
        <label data-testid="label-balance" className="form-label" htmlFor="balance">Balance</label>
        <input
          className="form-input-balance"
          id="balance"
          type="number"
          value={ balanceInput.value }
          onChange={ balanceInput.handleChange}
          placeholder="10250,50"
        />
        {
          (tokenInput.value === "" || balanceInput.value === "") && <small className="form-small">Preencha todos os campos!</small>
        }
      </div>
    </form>
  )
}

export default Form;