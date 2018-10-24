<template>
    <div v-bind:title="message" v-if="seen">{{msg}}
        <ol>
            <li v-for="todo in todos">{{todo.text}}</li>
        </ol>
        <p>{{aa}}</p>
        <input v-model="aa">
        <button v-on:click="reverseMessage">逆转消息</button>
    </div>
</template>
<script>
    export default{
        data: {
            msg: 'fff!',
            visitCount: 0,
            hideCompletedTodos: false,
            todos: [],
            error: null
        },
        data(){
            return{
                msg: 'fff!',
                message:"sss",
                seen:true,
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                aa:"Hello Vue.js!",
            }
        },
        methods: {
            reverseMessage: function () {
                this.aa = this.aa.split('').reverse().join('')
            }
        }

    }
</script>