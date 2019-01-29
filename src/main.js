import Vue from "vue";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router';
import App from "./App";

Vue.use(iView);
let app = new Vue({
    el: "#root",
    router,
    template: '<App/>',
    components: { App }
});