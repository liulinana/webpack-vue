<template>
    <div>
        this is a index
        {{aa}}
        <Button type="primary" @click="count">抽南通</Button>
    </div>
</template>
<script>
    import store from '../Vuex/store';
    import mapState from '../Vuex/mapState';
    export default {
        store: store,
        data() {
            return {
                aa: store.state.a.count
            }
        },
        methods: {
            count () {

            }
        },
        // computed: mapState([
        //     // 映射 this.count 为 store.state.count
        //     'count'
        // ])
    }

</script>