<template>
    <div>
        this is a index
        {{aa}}
        <Button type="primary" @click="count">抽南通</Button>
        <Button type="primary" @click="api">请求接口</Button>
    </div>
</template>
<script>
    import store from '../store/index';
    import api from '../axios/api.js';
    import {increaseCounter} from '../store/actions'
    export default {
        store: store,
        data() {
            return {}
        },
        computed: {
            aa () {
                return store.getters.counts
            }
        },
        methods: {
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