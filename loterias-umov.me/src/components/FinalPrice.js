import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FinalPrice() {
  const { chosenNumbers } = useContext(MyContext);

  const priceTableSena = () => {
    switch (chosenNumbers.length) {
      case 6:
        return 4.50;
      case 7:
        return 31.50;
      case 8:
        return 126;
      case 9:
        return 378;
      case 10:
        return 945;
      case 11:
        return 2079;
      case 12:
        return 4158;
      case 13:
        return 7722;
      case 14:
        return 13513.50;
      case 15:
        return 22522.50;
      default:
        return 0;
    }
  }

  return (
    <h3>
      { `Valor do Jogo: R$ ${priceTableSena().toFixed(2).toString().replace('.', ',')}` }
    </h3>
  );
}

export default FinalPrice;
