import Vue from 'vue'
//Tuodaan Vue Bootstrap
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

//Tuodaan Bootstrap ja BootstrapVue CSS tiedostot. Huom! Oikea järjestys
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//BootstrapVue saataville
Vue.use(BootstrapVue)
// Vaihtoehtoinen Bootstrap Ikoni plugin
Vue.use(IconsPlugin)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
