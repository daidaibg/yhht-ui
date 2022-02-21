/*
 * @Author: daidai
 * @Date: 2021-09-11 15:46:12
 * @LastEditors: daidai
 * @LastEditTime: 2021-10-29 17:21:00
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\imageView\index.js
 */
import ImageViewer from 'element-ui/packages/image/src/image-viewer'
/* istanbul ignore next */
ImageViewer.name="yh-image-viewer"
ImageViewer.install = function(Vue) {
  Vue.component(ImageViewer.name, ImageViewer);
};

export default ImageViewer;
