// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import Menu from './components/Menu'

import SetSingleDigits from './components/lessons/SetSingleDigits'
import ReadSingleDigits from './components/lessons/ReadSingleDigits'
import ReadMultipleDigits from './components/lessons/ReadMultipleDigits'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  routes: [
    { path: '/',
      component: App,
      children: [
        {
          name: 'Main Menu',
          path: '/',
          component: Menu
        }, {
          name: 'Setting Single Digits',
          path: '/setting_single_digits',
          component: SetSingleDigits
        }, {
          name: 'Reading Single Digits',
          path: '/reading_single_digits',
          component: ReadSingleDigits
        }, {
          name: 'Reading Multiple Digits',
          path: '/reading_multiple_digits',
          component: ReadMultipleDigits
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
