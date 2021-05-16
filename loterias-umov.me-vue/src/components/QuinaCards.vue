<template>
  <div class="container">
    <div class="container-card quina">
      <button
        v-for="(number, index) in cardNumbers"
        :key="index"
        @click="handleClick(number)"
      >
        {{ number }}
      </button>
    </div>
    <p v-if="this.chosenNumbers.length < 1">
      Você ainda não marcou nenhuma dezena
    </p>
    <p v-else-if="this.chosenNumbers.length > 15">
      Limite de até 15 dezenas, por favor, remova alguma: {{ chosenNumbers.join(' - ') }}
    </p>
    <p v-else>
      Você jogou as seguintes dezenas: {{ chosenNumbers.join(' - ') }}
    </p>
    <button
      @click="chosenNumbers = []"
      class="background-grey simple-padding"
    >
      Recomeçar Jogo
    </button>
    <FinalPrice
      :chosenNumbersLength="this.chosenNumbers.length"
    />
    <router-link to="/pagamento" class="background-blue confirm-game">
      Confirmar o Jogo
    </router-link>
  </div>
</template>

<script>
import FinalPrice from '@/components/FinalPrice.vue';

export default {
  name: 'QuinaCards',
  data() {
    return {
      cardNumbers: [],
      returnUser: 'Você ainda não marcou nenhuma dezena',
      chosenNumbers: [],
    };
  },
  components: {
    FinalPrice,
  },
  created() {
    const numbers = [];
    const MIN_QUINA_CARD = 0;
    const MAX_QUINA_CARD = 80;
    let lengthQuina = MIN_QUINA_CARD;
    while (lengthQuina <= MAX_QUINA_CARD) {
      numbers.push(lengthQuina);
      lengthQuina += 1;
    }
    const turnNumbersToString = numbers.map((num) => {
      const str = num.toString();
      if (str.length < 2) {
        return `0${str}`;
      }
      return str;
    });
    this.cardNumbers = turnNumbersToString;
  },
  methods: {
    handleClick(number) {
      const numberExists = this.chosenNumbers.find((item) => item === number);
      if (!numberExists) {
        this.chosenNumbers = [...this.chosenNumbers, number].sort();
      } else {
        const newChosenNumbers = this.chosenNumbers.filter((item) => item !== number);
        this.chosenNumbers = newChosenNumbers;
      }
    },
  },
};
</script>

<style>
@media (min-width: 500px) {
  .quina {
    width: 60%;
  }
}

@media (min-width: 1000px) {
  .quina {
    width: 30%;
  }
}

@media (min-width: 1500px) {
  .quina {
    width: 20%;
  }
}
</style>
