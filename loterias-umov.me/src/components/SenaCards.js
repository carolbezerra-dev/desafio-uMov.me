import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SenaCards() {
  const { cardNumbers, chosenNumbers, setChosenNumbers } = useContext(MyContext);
  
  const handleClick = (number) => {
    const numberExists = chosenNumbers.find((item) => item === number);
    if (!numberExists) {
      setChosenNumbers([...chosenNumbers, number].sort());
    } else {
      const newChosenNumbers = chosenNumbers.filter((item) => item !== number);
      setChosenNumbers(newChosenNumbers);
    }
  }

  return (
    <div>
      {cardNumbers.map((num) => (
        <span key={num} onClick={() => handleClick(num) }>
          { num }
        </span>
        ))}
    </div>
  );
}

export default SenaCards;
