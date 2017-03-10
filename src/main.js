// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import Menu from './components/Menu'

import SetSingleDigits from './components/lessons/SetSingleDigits'
import ReadSingleDigits from './components/lessons/ReadSingleDigits'
import ReadMultipleDigits from './components/lessons/ReadMultipleDigits'
import AddSingleDigits from './components/lessons/AddSingleDigits'
import AddFourDigits from './components/lessons/AddFourDigits'
import SubtractTwoDigits from './components/lessons/SubtractTwoDigits'
import SubtractFourDigits from './components/lessons/SubtractFourDigits'
import AddSubtractThreeDigits from './components/lessons/AddSubtractThreeDigits'
import AddSubtractFiveDigits from './components/lessons/AddSubtractFiveDigits'
import AddSubtractHard from './components/lessons/AddSubtractHard'

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
        }, {
          name: 'Adding Single Digits',
          path: '/adding_single_digits',
          component: AddSingleDigits
        }, {
          name: 'Adding Four Digits',
          path: '/adding_four_digits',
          component: AddFourDigits
        }, {
          name: 'Subtracting Two Digits',
          path: '/subtracting_two_digits',
          component: SubtractTwoDigits
        }, {
          name: 'Subtracting Four Digits',
          path: '/subtracting_four_digits',
          component: SubtractFourDigits
        }, {
          name: 'Addition & Subtraction - Three Digits',
          path: '/add_subtract_three_digits',
          component: AddSubtractThreeDigits
        }, {
          name: 'Addition & Subtraction - Five Digits',
          path: '/add_subtract_five_digits',
          component: AddSubtractFiveDigits
        }, {
          name: 'Addition & Subtraction - Hard',
          path: '/add_subtract_hard',
          component: AddSubtractHard
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
