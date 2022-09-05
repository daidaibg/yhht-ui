/*
 * @Author: daidai
 * @Date: 2021-09-13 10:08:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-30 17:29:23
 * @FilePath: \npm-gd\packages\cropper\index.js
 */
import Cropper from './src/main.vue';

/* istanbul ignore next */
Cropper.install = function(Vue) {
  Vue.component(Cropper.name, Cropper);
};

export default Cropper;
