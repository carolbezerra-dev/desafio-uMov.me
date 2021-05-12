import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import SenaCards from '../components/SenaCards';
import QuinaCards from '../components/QuinaCards';

function Lottery() {
  const { setCardNumbers } = useContext(MyContext);
  const [gameName, setGameName] = useState('Sena');
  
  useEffect(() => {
    const creatingNumbers = () => {
      const MIN_NUMBER_CARD = 1;
      const MAX_NUMBER_CARD = 60;
      let length = MIN_NUMBER_CARD;
      let numbers = [];
      while (length <= MAX_NUMBER_CARD) {
        numbers.push(length);
        length += 1;
      }
      const turnNumbersToString = numbers
        .map((num) => num.toString())
        .map((str) => str.length < 2 ? `0${str}` : str);
      return setCardNumbers(turnNumbersToString);
    }
    creatingNumbers();
  }, [setCardNumbers]);

  const changingGameName = () => {
    gameName === 'Sena' ? setGameName('Quina') : setGameName('Sena');
  }

  return (
    <div>
      <h1>uMov.me Loterias</h1>
      <h2>{ `Esse jogo é ${gameName}` }</h2>
      <button
        type="button"
        onClick={ changingGameName }
      >
        { gameName === 'Sena' ? 'Mudar para Quina' : 'Mudar para Sena' }
      </button>
      { gameName === 'Sena' ? <SenaCards /> : <QuinaCards /> }
    </div>
  );
}

export default Lottery;
