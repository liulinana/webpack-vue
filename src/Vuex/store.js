//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义初始化变量
const state = {
    list:[{
        name:'张三'
    }],
    count:0
}
//定义动作
const mutations = {//模仿ajax获取新数据后 动态更新data
    GETLIST (state, amount) {
        state.list = amount
    },
    //官方例子，加减
    INCREASE(state, amount){
        state.count=state.count+amount
    },
    REDUCE(state,amount){
        state.count=state.count-amount
    }
}

export default new Vuex.Store({
    state,
    mutations
})