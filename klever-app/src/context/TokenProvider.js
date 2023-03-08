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
  const [indexToken, setIndexToken] = useState();

  function cleanInputs() {
    tokenInput.setValue('');
    balanceInput.setValue('');
  }

  function checkTokens(array) {
    let bool = false
    array.forEach((item) => {
      const { token } = item;
      if (tokenInput.value === token) {
        bool = true;
      }
    })
    return bool;
  }

  function addLocalStorage() {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if (checkTokens(tokens)) {
      setErro(true);
    } else {
      const newTokens = JSON.stringify([...tokens, {token: tokenInput.value, balance: balanceInput.value}])
      localStorage.setItem('tokens', newTokens);
      setErro(false);
      cleanInputs();
      history.push("/");
    }
  }

  function handleClickSave() {
    if (localStorage.getItem('tokens')) {
      addLocalStorage();
    } else {
      const tokenValue = JSON.stringify([{token: tokenInput.value, balance: balanceInput.value}]);
      localStorage.setItem('tokens', tokenValue);
      cleanInputs();
      history.push("/");
    }
  }

  function handleClickBack() {
    setErro(false);
    cleanInputs();
    history.push("/");
  }

  function handleEditIcon(index, item) {
    tokenInput.setValue(item.token);
    balanceInput.setValue(item.balance);
    setIndexToken(index);
    history.push("/edit-token");
  }

  function handleSaveEdit() {
    const tokensData = JSON.parse(localStorage.getItem('tokens'));
    tokensData.splice(indexToken, 1);
    if (checkTokens(tokensData)) {
      setErro(true);
    } else {
      const newData = {token: tokenInput.value, balance: balanceInput.value}
      tokensData.splice(indexToken, 0, newData);
      localStorage.setItem('tokens', JSON.stringify(tokensData));
      setErro(false);
      cleanInputs();
      history.push("/");
    }
  }

  function handleRemoveToken() {
    const result = window.confirm('Deseja excluir o item?');
    if (result) {
      const tokensData = JSON.parse(localStorage.getItem('tokens'));
      tokensData.splice(indexToken, 1);
      localStorage.setItem('tokens', JSON.stringify(tokensData));
      cleanInputs();
      history.push("/");
    } else {
      history.push("/");
    }
  }

  return (
    <TokenContext.Provider value={ { tokenInput, balanceInput, handleClickSave, erro, handleClickBack, handleEditIcon, indexToken, handleSaveEdit, handleRemoveToken } }>
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