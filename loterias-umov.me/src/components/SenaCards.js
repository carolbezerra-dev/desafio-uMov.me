import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SenaCards() {
  const { cardNumbers } = useContext(MyContext);
  return (
    <div>
      {cardNumbers.map((item) => item)}
    </div>
  );
}

export default SenaCards;
