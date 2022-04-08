<!--
 * @Author: daidai
 * @Date: 2021-09-16 09:57:16
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-22 14:20:54
 * @FilePath: \yhht-ui\src\views\map\map-index.vue
-->
// npm install --save @mapbox/mapbox-gl-style-spec
// npm install --save @svgdotjs/svg.js
// npm install --save @svgdotjs/svg.panzoom.js 
// npm install --save @turf/turf 
// npm install --save handlebars 
// npm install --save jsts 
// npm install --save pbf 
// npm install --save svg-path-to-canvas 
// npm install --save xml-js

// //有问题
// npm install --save SphericalMercator 
// npm install --save vector-tile 
<!--
 * @Author: daidai
 * @Date: 2021-09-16 17:37:50
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-17 10:49:06
 * @FilePath: \yhht-ui\src\views\Sys-And-map.vue
-->
<template>
  <div class="yh-content sysandmap">
    <div class="title">地图脚手架</div>
    <h4>后台geoserver，底图高德地图，gis展示。</h4>
    <ul class="innerwrap flex-center">
      <li>
        <a href="http://www.xmjhtech.com:18080/yhht-ui/map"  target="view_frame">
          <div class="topWrap flex-center">
            <img src="../../assets/component.7d1ca06.png" alt="" />
            <h3>线上地址</h3>
            <span>访问在线demo网站。</span>
          </div>
          <p class="flex-center">立即访问</p>
        </a>
      </li>
      <li>
        <a href="files/map.zip">
          <div class="topWrap flex-center">
            <img src="../../assets/resource.a72b8f8.png" alt="" />
            <h3>资源</h3>
            <span>下载压缩包，解压后npm i 安装直接使用。</span>
          </div>

          <p class="flex-center">立即下载</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//
export default {
  methods: {
    //模板导出
    ImportsOut() {
      window.location.href = "files/map.zip";
    },
  },
};
</script>

<style lang="scss" scoped>
.sysandmap {
  .title {
    padding-top: 50px;
    font-size: 34px;
    text-align: center;
    margin: 0;
    line-height: 48px;
    color: #555;
  }
  h4 {
    font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 10px 0 5px;
    text-align: center;
    margin-bottom: 120px;
  }
  ul {
    width: 100%;
  }
  li {
    margin: 0 20px;
    width: 250px;
    height: 400px;
    background: #fff;
    border: 1px solid #eaeefb;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all 0.3s ease-in-out;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    &:hover {
      margin-top: -20px;
    }
    img {
      width: 160px;
    }
    .topWrap {
      box-sizing: border-box;
      padding: 0 26px;
      height: 340px;
      font-size: 28px;
      flex-direction: column;
      h3 {
        font-size: 18px;
        color: #1f2f3d;
      }
      span {
        font-size: 12px;
        color: #99a9bf;
        line-height: 16px;
        text-align: center;
      }
    }
    p {
      flex: 1;
      margin: 0;
      color: #409eff;
      border-top: 1px solid #eaeefb;
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 768px) {
  .sysandmap {
    .title {
    }
  }
}
</style>