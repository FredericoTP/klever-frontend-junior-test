import TokenContext from './TokenContext';
import PropTypes from 'prop-types';


function TokenProvider({ children }) {
  return (
    <TokenContext.Provider value={ { asd: 'asd' } }>
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