<template>
  <div class="container">
    <h1 class="blue">Você finalizou o jogo!</h1>
    <FinalPrice />
    <p class="green">Boa sorte! 🍀</p>
  </div>
</template>

<script>
import FinalPrice from '@/components/FinalPrice.vue';

export default {
  name: 'Payment',
  components: {
    FinalPrice,
  },
};
</script>

<style scoped>
  .green {
    color: rgb(138, 196, 63)
  }
</style>
