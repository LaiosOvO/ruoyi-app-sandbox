import Vue from "vue";
import VueI18n from 'vue-i18n'
import zn from "./locales/zh.js"
import en from "./locales/en.js"
Vue.use(VueI18n);   // 全局注册国际化包
const i18n = new VueI18n({
  locale: "cn",   // 初始化中文
  messages: {
    "zn":zn,
    "en":en
  }
}); 

export default i18n