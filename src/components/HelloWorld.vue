<template>
    <div>
        this is a index
        {{aa}}
        <Button type="primary" @click="count">抽南通</Button>
        <Button type="primary" @click="api">请求接口</Button>
        <vc-message :message="messages"></vc-message>
        <p v-if="this.$store.state.seen">现在你看到我了</p>
        <p v-if="local">临时存储</p>
        <Button type="primary" @click="temporaryStorage">临时存储</Button>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: {{ reversedMessage() }}</p>
        <div
            class="static"
            v-bind:class="{ active: isActive, 'text-danger': hasError }"
        ></div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                </FormItem>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import store from '../store/index';
    import api from '../axios/api.js';
    import {increaseCounter} from '../store/actions';
    import child from './child';
    import {getStore, setStore, removeStore, clearStore} from './storage';
    export default {
        store: store,
        data() {
            return {
                messages: "子组件",
                seen: true,
                local:true,
                message: 'Hedddddllo',
                isActive: true,
                hasError: false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
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
            console.log('a is: ',this.messages);
            setStore('data', 'hello');
            // 获取存储
            let getStores = getStore('data');
            console.log("localStorage",getStores);
            // 清除
            removeStore('data');
            // 全部清除
            clearStore()
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
                console.log("withRouter",this.props)
                // store.commit("INCREASE",{
                //     amount: 10
                // })
            },
            api () {
                this.$store.state.seen=false;
                // api.get(`/dd`);
            },
            temporaryStorage () {
                return this.local = !this.local
            },
            handleSubmit(name) {
                console.log(this.$refs[name])
                debugger
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        debugger
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        },
    }

</script>