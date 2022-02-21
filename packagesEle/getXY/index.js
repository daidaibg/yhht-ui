/*
 * @Author: daidai
 * @Date: 2021-09-14 15:02:55
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-16 15:44:46
 * @FilePath: \yhht-ui\yhht-ui\packages\getXY\index.js
 */
import GetXY from './src/main.vue'

GetXY.install = function(Vue) {
  Vue.component(GetXY.name, GetXY);
};

export default GetXY;
