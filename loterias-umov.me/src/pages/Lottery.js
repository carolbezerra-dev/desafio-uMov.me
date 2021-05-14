import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import SenaCards from '../components/SenaCards';
import QuinaCards from '../components/QuinaCards';
import FinalPrice from '../components/FinalPrice';

function Lottery() {
  const { gameName,
    setGameName,
    setCardNumbers,
    chosenNumbers,
    setChosenNumbers, } = useContext(MyContext);
  
  const [returnUser, setReturnUser] = useState('Você ainda não marcou nenhuma dezena');

  useEffect(() => {
    const creatingNumbers = () => {
      let numbers = [];
      if (gameName === 'Sena') {
        const MIN_SENA_CARD = 1;
        const MAX_SENA_CARD = 60;
        let lengthSena = MIN_SENA_CARD;
        while (lengthSena <= MAX_SENA_CARD) {
          numbers.push(lengthSena);
          lengthSena += 1;
        }
      } else {
        const MIN_QUINA_CARD = 0;
        const MAX_QUINA_CARD = 80;
        let lengthQuina = MIN_QUINA_CARD;
        while (lengthQuina <= MAX_QUINA_CARD) {
          numbers.push(lengthQuina);
          lengthQuina += 1;
        }
      }
      const turnNumbersToString = numbers
        .map((num) => num.toString())
        .map((str) => str.length < 2 ? '0' + str : str);
      return setCardNumbers(turnNumbersToString);
    }
    creatingNumbers();
  }, [gameName, setCardNumbers]);

  useEffect(() => {
    const MIN_QUANTITY_PLAYED = 1;
    const MAX_QUANTITY_PLAYED = 15;
    switch (true) {
      case chosenNumbers.length <  MIN_QUANTITY_PLAYED:
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
        onClick={ () => setGameName('Sena') }
      >
        Jogar Sena
      </button>
      <button
        type="button"
        onClick={ () => setGameName('Quina') }
      >
        Jogar Quina
      </button>
      <div>
        { gameName === 'Sena' ? <SenaCards /> : <QuinaCards /> }
      </div>
      <p>
      { returnUser }
      </p>
      <button onClick={() => setChosenNumbers([])}>Recomeçar Jogo</button>
      <FinalPrice />
      <Link to="/pagamento">Confirmar o Jogo</Link>
    </div>
  );
}

export default Lottery;
