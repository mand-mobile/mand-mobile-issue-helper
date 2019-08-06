import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import messages from './data/translation'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'reset.css'
import 'github-markdown-css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
