/*
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-17 11:31:57
 * @FilePath: \yhht-ui\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/css/theme/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import yhhtUi from "yhht-ui"
import yhAndEleUi from 'yhht-ui/src/link-el'
import "yhht-ui/lib/theme/index.css"
import CodeWrap from "./components/Code-wrap.vue"
import Codes from './components/Codes.vue'
import TableParam from './components/scFormTable/table-code.vue'
import { loadFile } from "@lib";
import "./directives/highlight"
import  "./assets/css/index.scss";
import"./assets/css/code.scss";
import "yhht-ui/lib/theme/nprogress.css"

Vue.component("code-wrap",CodeWrap)
Vue.component("code-light",Codes)
Vue.component("TableParam",TableParam)

Vue.config.productionTip = false
Vue.use(yhhtUi)
Vue.use(yhAndEleUi)
Vue.use(ElementUI)
Vue.prototype.$loadFile=loadFile
Vue.prototype.historyUrl =process.env.VUE_APP_URL_HISTORY_URL
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
