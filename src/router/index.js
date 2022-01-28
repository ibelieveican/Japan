import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = new Router({
    routes: [
       // 登陆
        {
            path: '/login',
            component: ()=>import('../components/pages/login'),
        },
   ] 
})
   

export default routes