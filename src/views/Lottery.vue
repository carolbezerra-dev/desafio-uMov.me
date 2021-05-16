<template>
  <div class="container">
    <h1 class="blue container-flex-row">
      <img alt="uMovme site title" src="../img/umovme.png" class="margin-right">
      Loterias
    </h1>
    <h2 class="grey">Esse jogo é {{ gameName }}</h2>
    <div class="container-flex-row">
      <button
        @click="gameName = 'Sena'"
        class="background-grey"
      >
        Jogar Sena
      </button>
      <button
        @click="gameName = 'Quina'"
        class="background-blue"
      >
        Jogar Quina
      </button>
    </div>
    <div class="container-card">
      <SenaCards v-if="gameName === 'Sena'" />
      <QuinaCards v-else />
    </div>
    <router-link to="/pagamento" class="background-blue confirm-game">
      Confirmar o Jogo
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import SenaCards from '@/components/SenaCards.vue';
import QuinaCards from '@/components/QuinaCards.vue';

export default {
  name: 'Lottery',
  data() {
    return {
      gameName: 'Sena',
    };
  },
  components: {
    SenaCards,
    QuinaCards,
  },
};
</script>
