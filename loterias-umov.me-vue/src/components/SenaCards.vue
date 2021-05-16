<template>
  <div class="container">
    <div class="container-card sena">
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
      gameName="Sena"
    />
    <router-link to="/pagamento" class="background-blue confirm-game">
      Confirmar o Jogo
    </router-link>
  </div>
</template>

<script>
import FinalPrice from '@/components/FinalPrice.vue';

export default {
  name: 'SenaCards',
  data() {
    return {
      cardNumbers: [],
      returnUser: 'Você ainda não marcou nenhuma dezena',
      chosenNumbers: [],
      className: 'background-blue',
    };
  },
  components: {
    FinalPrice,
  },
  created() {
    const numbers = [];
    const MIN_SENA_CARD = 1;
    const MAX_SENA_CARD = 60;
    let lengthSena = MIN_SENA_CARD;
    while (lengthSena <= MAX_SENA_CARD) {
      numbers.push(lengthSena);
      lengthSena += 1;
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
  .sena {
    width: 65%;
  }
}

@media (min-width: 1000px) {
  .sena {
    width: 33%;
  }
}

@media (min-width: 1500px) {
  .sena {
    width: 22%;
  }
}
</style>
