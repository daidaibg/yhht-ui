/*
 * @Author: daidai
 * @Date: 2021-09-13 10:08:16
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-30 09:08:11
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\select-tree\index.js
 */
import yhSelectTree from './src/main';

/* istanbul ignore next */
yhSelectTree.install = function(Vue) {
  Vue.component(yhSelectTree.name, yhSelectTree);
};

export default yhSelectTree;
