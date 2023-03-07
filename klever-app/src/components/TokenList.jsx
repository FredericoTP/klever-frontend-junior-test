import { useContext } from 'react';
import TokenContext from '../context/TokenContext';
import image from '../assets/edit.svg';
import '../style/TokenList.css';

function TokenList() {
  const { handleEditIcon } = useContext(TokenContext);
  const storage = JSON.parse(localStorage.getItem('tokens'));

  return (
    <div className="list-container">
      <div className="list-titles">
        <p className="list-token">Tokens</p>
        <p className="list-balance">Balance</p>
      </div>
      {
        storage.map((item, index) => (
          <div key={ index } className="list-item">
            <div className="list-item-token">
              <button
                onClick={ () => handleEditIcon(index, item) }
                className="list-icon"
              >
                <img src={ image } alt="edit-icon" />
              </button>
              <p>{item.token}</p>
            </div>
            <p>{item.balance}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TokenList;