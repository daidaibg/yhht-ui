/*
 * @Author: daidai
 * @Date: 2021-10-09 09:07:45
 * @LastEditors: daidai
 * @LastEditTime: 2022-01-06 10:58:13
 * @FilePath: \yhht-ui\yhht-ui\packages\upload\index.js
 */

import Upload from './src/upload-img.vue';

/* istanbul ignore next */
Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
};

export default Upload;

