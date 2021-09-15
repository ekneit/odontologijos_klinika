require('./bootstrap');

window.Vue = require('vue').default;

import Vuex from 'vuex';
import VCalendar from 'v-calendar';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

import storeData from "./store/index";
const store = new Vuex.Store(
    storeData
)


Vue.use(VueRouter);
Vue.use(VCalendar);
const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    store,
    render: h => h(App)
});
