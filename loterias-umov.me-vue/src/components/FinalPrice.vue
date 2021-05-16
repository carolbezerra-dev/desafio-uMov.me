<template>
  <div>
    <h3 v-if="gameName === 'Sena'">
      Valor do Jogo: R$ {{ priceTableSena().toFixed(2).toString().replace('.', ',') }}
    </h3>
    <h3 v-else>
      Valor do Jogo: R$ {{ priceTableQuina().toFixed(2).toString().replace('.', ',') }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'FinalPrice',
  props: {
    chosenNumbersLength: Number,
    gameName: String,
  },
  methods: {
    priceTableSena() {
      switch (this.chosenNumbersLength) {
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
    },
    priceTableQuina() {
      switch (this.chosenNumbersLength) {
        case 5:
          return 2;
        case 6:
          return 12;
        case 7:
          return 42;
        case 8:
          return 112;
        case 9:
          return 252;
        case 10:
          return 504;
        case 11:
          return 924;
        case 12:
          return 1584;
        case 13:
          return 2574;
        case 14:
          return 4004;
        case 15:
          return 6006;
        default:
          return 0;
      }
    },
  },
};
</script>
