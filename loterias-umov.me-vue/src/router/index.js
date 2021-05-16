import Vue from 'vue';
import VueRouter from 'vue-router';
import Lottery from '../views/Lottery.vue';
import Payment from '../views/Payment.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Lottery',
    component: Lottery,
  },
  {
    path: '/pagamento',
    name: 'Payment',
    component: Payment,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
