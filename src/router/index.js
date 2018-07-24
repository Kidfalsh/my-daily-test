import Vue from 'vue'
import Router from 'vue-router'

import test from '@/components/test/test'
import index from '@/components/index/index'
import homePage from '@/components/homePage/homePage'
import newList from '@/components/newList/newList'
import weatherForecast from '@/components/weatherForecast/weatherForecast'
import personCenter from '@/components/personCenter/personCenter'
import interview from '@/components/interview/interview'
import uploadFile from '@/components/uploadFile/uploadFile' //文件上传页面
import yunhe from '@/components/yunhe/yunhe' //云鹤
import wave from '@/components/wave/wave' //波浪页面
import handWritten from '@/components/handWritten/handWritten' //手写
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
    },{
      path:'/index/interview',
      name:'interview',
      component:interview
    },{
      path:'/index/uploadFile',
      name:'uploadFile',
      component:uploadFile
    }, {
      path: '/index/yunhe',
      name: 'yunhe',
      component: yunhe
    }, {
      path: '/index/wave',
      name: 'wave',
      component: wave
    }, {
      path: '/index/handWritten',
      name: 'handWritten',
      component: handWritten
    }
  ]
})
