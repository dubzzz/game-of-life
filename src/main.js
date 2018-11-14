import Vue from 'vue'
import App from './App.vue'

import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
