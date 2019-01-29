<template>
    <div>
        this is a index
        {{aa}}
        <Button type="primary" @click="count">抽南通</Button>
    </div>
</template>
<script>
    import store from '../Vuex/store';
    export default {
        store: store,
        data() {
            return {
                aa: store.state.count
            }
        },
        methods: {
            count() {
                store.commit("INCREASE")
            }
        }
    }

</script>