import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import form from '../components/form';
import table from '../components/table';
import Errorinfo from './error404'

Vue.use(Router);


const router = new Router({
    routes: [
        // 404page
        {
            path: '/errorinfo',
            name: 'Errorinfo',
            component: Errorinfo
        },
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/form',
            name: 'form',
            component: form
        },
        {
            path: '/table',
            name: 'table',
            component: table
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next('/errorinfo'): next({
            name: from.name
        }) ;
    } else {
        next(); //如果匹配到正确跳转
    }
});

export default router;
