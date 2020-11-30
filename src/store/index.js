import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies';

Vue.use(Vuex);
Vue.use(VueCookies);

const paintingKey = (id) => `painting_${id}`;

export default new Vuex.Store({
  state: {
    basket: {},
  },
  mutations: {
    BASKET_SET(state, { id, value }) {
      state.basket[id] = value;
      Vue.$cookies.set(paintingKey(id), JSON.stringify(value));
    },
    BASKET_GET(state, { id }) {
      state.basket[id] = JSON.parse(Vue.$cookies.get(paintingKey(id)));
    },
  },
  actions: {
  },
  modules: {
  },
})
