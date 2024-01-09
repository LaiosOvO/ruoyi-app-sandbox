import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'





// 使用 uView插件
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 使用国际化插件 Vue |18n 
import i18n from '@/common/lang/index.js'


// 引入iconfont
import '@/static/iconfont/iconfont.css';
import '@/static/iconfont/iconfont.js';


const app = new Vue({
  ...App,
  i18n
})

app.$mount()
