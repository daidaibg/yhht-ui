/*
 * @Author: daidai
 * @Date: 2021-09-13 10:08:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-30 17:28:18
 * @FilePath: \yhht-ui\yhht-ui\packages\table-pag\index.js
 */
// @ts-ignore
import tablePag from './src/main.vue';

/* istanbul ignore next */
tablePag.install = function(Vue) {
  Vue.component(tablePag.name, tablePag);
};

export default tablePag;
