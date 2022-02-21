/*
 * @Author: daidai
 * @Date: 2021-09-28 14:57:41
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-16 17:24:55
 * @FilePath: \yhht-ui\yhht-ui\src\link-el.js
 */

import tablePag from '../packagesEle/table-pag'
import yhSelectTree from '../packagesEle/select-tree'
import Search from '../packagesEle/search/index';
import ImageViewer from '../packagesEle/imageView/index';
import GetXY from '../packagesEle/getXY'
import getXy from '../packagesEle/getXY/src/main'
const components = [
    tablePag,
    yhSelectTree,
    Search,
    ImageViewer,
    GetXY
];

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        // console.log(component)
      Vue.component(component.name, component);
    });
  
  };
  /* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

  export default {
    version: '1.0.1',
    install,
    tablePag,
    yhSelectTree,
    Search,
    ImageViewer,
    GetXY,
    getXy
  };
  export {
    tablePag,
    yhSelectTree,
    Search,
    ImageViewer,
    GetXY,
    getXy
  }