/*
 * @Author: daidai
 * @Date: 2021-09-13 10:08:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-30 17:28:29
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\select-tree\index.js
 */
// @ts-ignore
import yhSelectTree from './src/main.vue';

/* istanbul ignore next */
yhSelectTree.install = function(Vue) {
  Vue.component(yhSelectTree.name, yhSelectTree);
};

export default yhSelectTree;
