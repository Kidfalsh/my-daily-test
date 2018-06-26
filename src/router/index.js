import Vue from 'vue'
import Router from 'vue-router'

import test from '@/components/test/test'
import index from '../components/index/index'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      redirect:'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },{
      path:'/index/test',
      name: 'test',
      component:test
    }
  ]
})
