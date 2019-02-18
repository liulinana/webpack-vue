<template>
    <div>
        this is a index
        {{aa}}
        <Button type="primary" @click="count">抽南通</Button>
        <Button type="primary" @click="api">请求接口</Button>
        <vc-message :message="messages"></vc-message>
        <p v-if="seen">现在你看到我了</p>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: {{ reversedMessage() }}</p>
        <div
                class="static"
                v-bind:class="{ active: isActive, 'text-danger': hasError }"
        ></div>
    </div>
</template>
<script>
    import store from '../store/index';
    import api from '../axios/api.js';
    import {increaseCounter} from '../store/actions';
    import child from './child'
    export default {
        store: store,
        data() {
            return {
                messages: "子组件",
                seen: true,
                message: 'Hedddddllo',
                isActive: true,
                hasError: false
            }
        },
        computed: {
            aa () {
                return store.getters.counts
            },

        },
        components: {
            'vc-message': child
        },
        created: function () {
            // `this` 指向 vm 实例,实例被创建之后执行代码
            console.log('a is: ',this.messages)
        },
        methods: {
            reversedMessage () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            count () {
                // this.$store.dispatch("INCREASE")
                // store.dispatch("increaseCounter")
                increaseCounter("INCREASE",10)
                // store.commit("INCREASE",{
                //     amount: 10
                // })
            },
            api () {
                api.get(`/dd`);
            }
        },
    }

</script>