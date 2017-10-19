import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowDetail from '@/components/ShowDetail'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/shows/:show', component: ShowDetail }
    ]
})
