import React from 'react';
import { FinalPrice } from '../components';

function Payment() {
  return (
    <div className="container">
      <h1 className="blue">Você finalizou o jogo!</h1>
      <FinalPrice />
      <h4 style={{ color: "rgb(138, 196, 63)" }}>Boa sorte! 🍀</h4>
    </div>
  );
}

export default Payment;
