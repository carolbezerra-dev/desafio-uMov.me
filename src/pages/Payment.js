import React, { useContext } from 'react';
import { FinalPrice } from '../components';
import MyContext from '../context/MyContext';
import { useHistory } from 'react-router-dom';

function Payment() {
  const { setChosenNumbers, setGameName } = useContext(MyContext);

  const history = useHistory();

  const playAgain = () => {
    history.push('/');
    setChosenNumbers([]);
    setGameName('Sena');
  };

  return (
    <div className="container">
      <h1 className="blue">Você finalizou o jogo!</h1>
      <FinalPrice />
      <h4 style={{ color: "rgb(138, 196, 63)" }}>Boa sorte! 🍀</h4>
      <button
        type="button"
        onClick={ playAgain }
        className="background-blue confirm-game"
      >
        Jogar de novo
      </button>
    </div>
  );
}

export default Payment;
