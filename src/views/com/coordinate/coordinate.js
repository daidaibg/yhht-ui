/*
 * @Author: daidai
 * @Date: 2022-02-16 17:02:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-09 17:26:53
 * @FilePath: \yhht-ui\src\views\link-ele\Get-xy\get-sy.js
 */
export default {
    codetext:`<template> 
    <yh-button type="primary" @click="openGetxy">获取坐标</yh-button>
    <yh-button type="primary" @click="openGetxy(118.110602,24.540688)">获取坐标（传参）</yh-button>
    <yh-coordinate
      @close="close"
      ref="yhxy_ref"
      @searchMessage="searchMessage"
      @locationMessage="locationMessage"
    ></yh-coordinate>
</template>

<script>
export default {
    methods: {
      close(xy,isClickOk) {
        // isClickOk true代表点击的确定按钮
        console.log(xy,isClickOk);
      },
      openGetxy(x,y){
        if(x,y){
          this.$refs.yhxy_ref.init(x,y)
        }else{
          this.$refs.yhxy_ref.init()
        }
        
      },
      /**
       * @description: 搜索提示消息
       * @param {Boolean} res.success true 成功 | false 失败
       */  
      searchMessage(res){
        console.log("searchMessage",res)
      },
       /**
       * @description: 定位消息
       * @param {Boolean} res.success true 成功 | false 失败
       */  
      locationMessage(res){
        console.log("locationMessage",res)
      }
    },
  };
</script>`,
codefun:`<yh-button type="primary" @click="funGetxy(118.110602, 24.540688)">方法调用</yh-button>
<yh-button type="primary" @click="funGetxy2(118.110602, 24.540688)">方法调用(隐藏搜索框)</yh-button>

<script>
    import { GetCoordinate } from "yhht-ui";

    /**
     * @description: 根据函数获取xy
     * @param {*} x
     * @param {*} y
     * @return {*}
     */
    funGetxy(x, y) {
      this.GetXY = GetCoordinate({
        // lat: y,
        // lng: x,
        searchHide: false,
        locationMessage: (res) => {
          console.log("locationMessage", res);
        },
        searchMessage: (res) => {
          console.log("searchMessage", res);
        },
        close: (xy,isClickOk) => {
          console.log(xy,isClickOk);
        },
      });
    },
    funGetxy2(x, y) {
      GetCoordinate({
        lat: y,
        lng: x,
        searchHide: true,
        yhGetxyClass: "test",
        locationMessage: (res) => {
          console.log("locationMessage", res);
        },
        searchMessage: (res) => {
          console.log("searchMessage", res);
        },
        close: (xy) => {
           // isClickOk true代表点击的确定按钮
          console.log(xy);
        },
      });
    },
</script>
`,
AmpLink:`<script type="text/javascript">
window._AMapSecurityConfig = {
  // 例如 ：serviceHost:'http://1.1.1.1:80/_AMapService', //需要服务器端配置
  securityJsCode: 'you code'
}
</script>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=2.0&key=you key"></script>`
}