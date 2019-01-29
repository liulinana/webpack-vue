<template>
    <div id="app" :title="message" class="dd" v-if="seen">{{msg}}
        <router-view></router-view>
        <router-link to="/table/1">表格</router-link>
        <router-link to="/form">表单</router-link>
        <ol>
            <li v-for="todo in todos">{{todo.text}}</li>
        </ol>
        <p>{{aa}}</p>
        <input v-model="aa">
        <Button type="primary" @click="reverseMessage">逆转消息</Button>
    </div>
</template>
<style>
    .dd{}
</style>
<script>
    export default{
        name: "App",
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
                this.todos.push({ text: '新项目' });
                this.aa = this.aa.split('').reverse().join('')
            }
        }

    }
</script>