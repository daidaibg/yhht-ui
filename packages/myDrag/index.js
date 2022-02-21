/*
 * @Author: daidai
 * @Date: 2021-10-09 09:07:45
 * @LastEditors: daidai
 * @LastEditTime: 2021-10-09 09:09:10
 * @FilePath: \yhht-ui\yhht-ui\packages\myDrag\index.js
 */

import Drag from './src/main.vue';

/* istanbul ignore next */
Drag.install = function(Vue) {
  Vue.component(Drag.name, Drag);
};

export default Drag;

