import { SOME_MUTATION } from '../mutation-types'

export const modelA = {
    state : {
        list:[{
            name:'张三'
        }],
        count:0
    },
    //定义动作
    mutations : {//模仿ajax获取新数据后 动态更新data
        GETLIST (state, amount) {
            state.list = amount
        },
        //官方例子，加减
        INCREASE(state, amount){
            state.count=state.count+amount
        },
        REDUCE(state,amount){
            state.count=state.count-amount
        },
        [SOME_MUTATION] (state) {
            // mutate state
        }
    }
};


