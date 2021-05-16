import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { SenaCards, QuinaCards, FinalPrice } from '../components';
import umovmeImg from '../img/umovme.png';
import '../css/pages.css';

function Lottery() {
  const { gameName,
    setGameName,
    setCardNumbers,
    chosenNumbers,
    setChosenNumbers, } = useContext(MyContext);
  
  const [returnUser, setReturnUser] = useState('Você ainda não marcou nenhuma dezena');

  const history = useHistory();

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

  const MIN_QUANTITY_PLAYED = 1;
  useEffect(() => {
    const MAX_QUANTITY_PLAYED = 15;
    switch (true) {
      case chosenNumbers.length <  MIN_QUANTITY_PLAYED:
        return setReturnUser('Você ainda não marcou nenhuma dezena');
      case chosenNumbers.length > MAX_QUANTITY_PLAYED:
        return setReturnUser(
          'Você só pode escolher até 15 dezenas, por favor, remova alguma'
        );
      default:
        return setReturnUser(
          `Você jogou as seguintes dezenas:\n${chosenNumbers.join(' - ')}`
        );
    }
  }, [chosenNumbers]);

  return (
    <div className="container">
      <h1 className="blue container-flex-row">
        <img src={ umovmeImg } alt="uMov.me site title" className="margin-right" />
        Loterias
      </h1>
      <h2 className="grey">{ `Esse jogo é ${gameName}` }</h2>
      <div className="container-flex-row">
        <button
          type="button"
          onClick={ () => setGameName('Sena') }
          className={ gameName !== 'Sena' ? 'background-grey' : 'background-blue' }
        >
          Jogar Sena
        </button>
        <button
          type="button"
          onClick={ () => setGameName('Quina') }
          className={ gameName === 'Sena' ? 'background-grey' : 'background-blue' }
        >
          Jogar Quina
        </button>
      </div>
      <div className="container-card">
        { gameName === 'Sena' ? <SenaCards /> : <QuinaCards /> }
      </div>
      <p style={{whiteSpace: "pre-wrap"}}>{ returnUser }</p>
      <button
        type="button"
        onClick={() => setChosenNumbers([])}
        className="background-grey simple-padding"
      >
        Recomeçar Jogo
      </button>
      <FinalPrice />
      <button
        type="button"
        onClick={ () => history.push('/pagamento')}
        className="background-blue confirm-game"
        disabled={ gameName === 'Sena' ? chosenNumbers.length < 6 : chosenNumbers.length < 5 }
      >
        Confirmar o Jogo
      </button>
    </div>
  );
}

export default Lottery;
