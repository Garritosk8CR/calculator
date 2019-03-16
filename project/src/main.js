/* eslint-disable */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuetify)

axios.defaults.baseURL = 'https://airborne-43653.firebaseio.com/'


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
