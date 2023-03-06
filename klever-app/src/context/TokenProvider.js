import PropTypes from 'prop-types';
import TokenContext from './TokenContext';
import useInput from '../hooks/useInput';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function TokenProvider({ children }) {
  const tokenInput = useInput();
  const balanceInput = useInput();
  const history = useHistory();
  const [erro, setErro] = useState(false);

  function cleanInputs() {
    tokenInput.setValue('');
    balanceInput.setValue('');
  }

  function checkTokens() {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    let bool = false
    tokens.forEach((item) => {
      const { token } = item;
      if (tokenInput.value.toUpperCase() === token) {
        bool = true;
      }
    })
    return bool;
  }

  function addLocalStorage() {
    if (checkTokens()) {
      setErro(true);
    } else {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const newTokens = JSON.stringify([...tokens, {token: tokenInput.value.toUpperCase(), balance: balanceInput.value}])
      localStorage.setItem('tokens', newTokens);
      cleanInputs();
      history.push("/");
    }
  }

  function handleClickSave() {
    if (localStorage.getItem('tokens')) {
      addLocalStorage();
    } else {
      const tokenValue = JSON.stringify([{token: tokenInput.value.toUpperCase(), balance: balanceInput.value}]);
      localStorage.setItem('tokens', tokenValue);
      cleanInputs();
      history.push("/");
    }
  }

  return (
    <TokenContext.Provider value={ { tokenInput, balanceInput, handleClickSave, erro } }>
      {children}
    </TokenContext.Provider>
  )
}

TokenProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TokenProvider;