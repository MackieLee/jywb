// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router/index'
import {
  Button,
  Table,
  Row,
  Col,
  Card,
} from 'iview'
import VueLazyComponent from '@xunlei/vue-lazy-component'

Vue.use(Router)
Vue.use(VueLazyComponent)

import 'iview/dist/styles/iview.css'

//---iview组件按需引入
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Card',Card)
//---iview组件按需引入

Vue.config.productionTip = false

const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
