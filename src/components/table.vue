<template>
    <div>
        this is a table
        <span style="color: brown">{{this.$route.params.name}}</span>
    </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                msg: ''
            }
        },
        methods: {
            getParams () {
                // 取到路由带过来的参数
                let routerParams = this.$route.params.name
                // 将数据放在当前组件的数据内
                return this.msg = routerParams

            }
        },
        watch: {
            // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
            $route: "getParams"
        },
    //     created: function () {
    //         this.getParams();
    //         let routerParams = this.$route.params.name;
    //         this.msg = routerParams
    //         console.log(this.$route.params.name,"路由")
    //
    //         // `this` 指向 vm 实例,实例被创建之后执行代码
    // },
    }
</script>

