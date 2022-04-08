/*
 * @Author: daidai
 * @Date: 2021-09-14 15:02:55
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-14 15:03:43
 * @FilePath: \npm-ui\packages\loading\index.js
 */
import './src/main.css'
import Loading from './src/main.vue'

Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
