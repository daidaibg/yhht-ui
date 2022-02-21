/**
 * @Author: daidai
 * @Date: 2021-09-16 09:20:55
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-17 14:17:53
 * @FilePath: \yhht-ui\yhht-ui\packages\skeleton\index.js
 */

import Skeleton from './src/index.vue';


Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;
