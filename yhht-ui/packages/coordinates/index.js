/*
 * @Author: daidai
 * @Date: 2021-09-14 15:02:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-09 15:57:17
 * @FilePath: \yhht-ui\yhht-ui\packages\getXY\index.js
 */
import Coordinate from './src/main.vue'

Coordinate.install = function(Vue) {
  Vue.component(Coordinate.name, Coordinate);
};

export default Coordinate;
