<template>
    <div>
        this is a index
        {{aa}}
        <Button type="primary" @click="count">抽南通</Button>
    </div>
</template>
<script>
    import store from '../store/index';
    import mapState from '../store/mapState';
    import {increaseCounter} from '../store/actions'
    export default {
        store: store,
        data() {
            return {
                aa:store.getters.counts
            }
        },
        methods: {
            count () {
                increaseCounter("INCREASE")
                // store.commit("INCREASE")
            }
        },
    }

</script>