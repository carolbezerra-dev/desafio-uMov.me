import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [cardNumbers, setCardNumbers] = useState([]);
  const [chosenNumbers, setChosenNumbers] = useState([]);

  const contextValues = {
    cardNumbers,
    setCardNumbers,
    chosenNumbers,
    setChosenNumbers,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
