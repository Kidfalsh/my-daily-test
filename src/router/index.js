import Vue from 'vue'
import Router from 'vue-router'

import test from '@/components/test/test'
import index from '@/components/index/index'
import navbar from '@/components/navbar/navbar'
import homePage from '@/components/homePage/homePage'
import newList from '@/components/newList/newList'
import weatherForecast from '@/components/weatherForecast/weatherForecast'
import personCenter from '@/components/personCenter/personCenter'

Vue.use(Router)


export default new Router({
  routes: [
    {
      name:'homePage',
      path:'/',
      redirect:'index/homePage'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/index/navbar',
          name: 'navbar',
          component: navbar
        },{
          path: '/index/homePage',
          name: 'homePage',
          component: homePage
        }, {
          path: '/index/newList',
          name: 'newList',
          component: newList
        }, {
          path: '/index/weatherForecast',
          name: 'weatherForecast',
          component: weatherForecast
        }, {
          path: '/index/personCenter',
          name: 'personCenter',
          component: personCenter
        }
      ]
    },{
      path:'/index/test',
      name: 'test',
      component:test
    },
  ]
})
