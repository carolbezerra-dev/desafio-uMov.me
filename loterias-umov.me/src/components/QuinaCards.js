import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function QuinaCards() {
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
      <button key={num} onClick={() => handleClick(num) }>
        { num }
      </button>
      ))}
  </div>
  );
}

export default QuinaCards;
