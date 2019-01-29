import Vue from "vue";
import iView from 'iview';
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';
import router from './router';
import App from "./App";
import api from './axios/api.js';
import store from './Vuex/store';
Vue.prototype.$api = api;

Vue.use(iView,Vuex);
let app = new Vue({
    el: "#root",
    router,
    store,
    template: '<App/>',
    components: { App }
});