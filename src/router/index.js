import Vue from 'vue';
import Router from 'vue-router';
import Errorinfo from './error404';
import menu from './menu.config'

Vue.use(Router);


const router = new Router({
    routes: [
        // 404page
        {
            path: '/errorinfo',
            name: 'Errorinfo',
            component: Errorinfo
        },
    ].concat(menu),
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
