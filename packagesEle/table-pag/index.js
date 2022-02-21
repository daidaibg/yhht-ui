/*
 * @Author: daidai
 * @Date: 2021-09-13 10:08:16
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-28 14:26:06
 * @FilePath: \yhht-ui\yhht-ui\packages\table-pag\index.js
 */
import tablePag from './src/main';

/* istanbul ignore next */
tablePag.install = function(Vue) {
  Vue.component(tablePag.name, tablePag);
};

export default tablePag;
