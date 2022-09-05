/*
 * @Author: daidai
 * @Date: 2021-09-11 15:46:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-30 17:28:53
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\imageView\index.js
 */
// @ts-ignore
import ImageViewer from 'element-ui/packages/image/src/image-viewer.vue'
/* istanbul ignore next */
ImageViewer.name="yh-image-viewer"
ImageViewer.install = function(Vue) {
  Vue.component(ImageViewer.name, ImageViewer);
};

export default ImageViewer;
