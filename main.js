import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'





// 使用 uView插件
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)









const app = new Vue({
  ...App
})

app.$mount()
