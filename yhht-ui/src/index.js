/*
 * @Author: daidai
 * @Date: 2021-07-12 09:26:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-13 10:12:19
 * @FilePath: \yhht-ui\yhht-ui\src\index.js
 */
// import Cropper from '../packages/cropper/index';// 图像预览 暂未写完
import Skeleton from '../packages/skeleton/index'
import SkeletonItem from '../packages/skeleton-item/index'
import Drag from '../packages/myDrag/index'
import Loading from '../packages/loading/index'
import UploadImg from '../packages/upload'
import Button from '../packages/button'
import Coordinate from '../packages/coordinates/index'
import GetCoordinate from '../packages/coordinates/src/main'

const components = [
  Skeleton,
  SkeletonItem,
  Drag,
  Loading,
  UploadImg,
  Button,
  Coordinate
];

const install = function (Vue, opts = {}) {
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
  Skeleton,
  SkeletonItem,
  Drag,
  Loading,
  UploadImg,
  Button,
  Coordinate
};

export {
  Skeleton,
  SkeletonItem,
  Drag,
  UploadImg,
  Button,
  Coordinate,
  GetCoordinate

}