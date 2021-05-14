import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import '../css/card.css';

function SenaCards() {
  const { cardNumbers, chosenNumbers, setChosenNumbers } = useContext(MyContext);
  const [css, setCss] = useState('background-white');
  
  const handleClick = (number) => {
    const numberExists = chosenNumbers.find((item) => item === number);
    if (!numberExists) {
      setChosenNumbers([...chosenNumbers, number].sort());
      setCss('background-gray');
    } else {
      const newChosenNumbers = chosenNumbers.filter((item) => item !== number);
      setChosenNumbers(newChosenNumbers);
      setCss('background-white');
    }
  }

  return (
    <div>
      {cardNumbers.map((num) => (
        <span key={num} onClick={() => handleClick(num) } className={ css }>
          { num }
        </span>
        ))}
    </div>
  );
}

export default SenaCards;
