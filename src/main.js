import Vue from 'vue'
import App from './App.vue'
import Chakra from '@chakra-ui/vue'
import router from './router'

import "./assets/main.css";

Vue.use(Chakra)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
