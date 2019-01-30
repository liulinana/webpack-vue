import Vue from "vue";
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';
import router from './router';
import App from "./App";
import api from './axios/api.js';
import store from './store/index';
import  './iview.js';

Vue.prototype.$api = api;

Vue.use(Vuex);
let app = new Vue({
    el: "#root",
    router,
    store,
    template: '<App/>',
    components: { App }
});

