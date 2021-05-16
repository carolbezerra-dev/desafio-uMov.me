import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../css/pages.css';
import '../css/card.css';

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
    <div className="container-card quina">
    {cardNumbers.map((num) => (
      <button
        key={num}
        onClick={() => handleClick(num) }
        className={ chosenNumbers.includes(num) ? 'background-blue' : 'grey-card'}
      >
        { num }
      </button>
      ))}
  </div>
  );
}

export default QuinaCards;
