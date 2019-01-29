import Vue from 'vue';
import Vuex from 'vuex';
import {modelA} from './module/modelA';
import {modelB} from "./module/modelB";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        a:modelA,
        b:modelB
    }
})