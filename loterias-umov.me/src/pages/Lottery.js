import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import SenaCards from '../components/SenaCards';
import QuinaCards from '../components/QuinaCards';
import FinalPrice from '../components/FinalPrice';

function Lottery() {
  const { setCardNumbers, chosenNumbers, setChosenNumbers } = useContext(MyContext);
  const [gameName, setGameName] = useState('Sena');
  const [returnUser, setReturnUser] = useState('Você ainda não marcou nenhuma dezena');
  
  const MIN_NUMBER_CARD = 1;
  useEffect(() => {
    const creatingNumbers = () => {
      const MAX_NUMBER_CARD = 60;
      let length = MIN_NUMBER_CARD;
      let numbers = [];
      while (length <= MAX_NUMBER_CARD) {
        numbers.push(length);
        length += 1;
      }
      const turnNumbersToString = numbers
        .map((num) => num.toString())
        .map((str) => str.length < 2 ? '0' + str : str);
      return setCardNumbers(turnNumbersToString);
    }
    creatingNumbers();
  }, [setCardNumbers]);

  const changingGameName = () => {
    gameName === 'Sena' ? setGameName('Quina') : setGameName('Sena');
  }

  useEffect(() => {
    const MAX_QUANTITY_PLAYED = 15;
    switch (true) {
      case chosenNumbers.length < MIN_NUMBER_CARD:
        return setReturnUser('Você ainda não marcou nenhuma dezena');
      case chosenNumbers.length > MAX_QUANTITY_PLAYED:
        return setReturnUser(
          `Você só pode escolher até 15 dezenas, por favor, remova alguma:
            ${chosenNumbers.join(' - ')}`
        );
      default:
        return setReturnUser(`Você jogou as seguntes dezenas: ${chosenNumbers.join(' - ')}`);
    }
  }, [chosenNumbers]);

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
      <p>
      { returnUser }
      </p>
      <button onClick={() => setChosenNumbers([])}>Recomeçar</button>
      <FinalPrice />
      <Link to="/pagamento">Confirmar o Jogo</Link>
    </div>
  );
}

export default Lottery;
