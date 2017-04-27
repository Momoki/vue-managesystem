import Vue from 'vue'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

// import '../c/index2.css'
import './c/index.css'

import VueRouter from 'vue-router';
import configRouter from './routers.js';

import App from './App.vue'

Vue.use(ElementUI)

Vue.use(VueRouter);

const router = new VueRouter({
  //开发阶段请注释
  // mode: 'history',
  base: __dirname,
  routes: configRouter,
  linkActiveClass: 'active',
  // scrollBehavior (to, from, savedPosition) {
  //   $('html,body').animate({
  //     scrollTop: 0
  //   }, 300);
  // }
});
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
