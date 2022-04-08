/*
 * @Author: daidai
 * @Date: 2022-02-16 17:02:57
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-17 10:43:51
 * @FilePath: \yhht-ui\src\views\link-ele\Get-xy\get-sy.js
 */
export default {
    codetext:`<template> 
    <el-button type="primary" @click="openGetxy">获取坐标</el-button>
    <el-button type="primary" @click="openGetxy(118.110602,24.540688)">获取坐标（传参）</el-button>
    <yh-getxy
        @close="close"
        ref="yhxy_ref"
        @searchMessage="searchMessage"
        @locationMessage="locationMessage"
    ></yh-getxy>
</template>

<script>
export default {
    methods: {
      close(xy){
        console.log(xy)
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
codefun:`<el-button type="primary" @click="funGetxy(118.110602, 24.540688)">方法调用</el-button>
<el-button type="primary" @click="funGetxy2(118.110602, 24.540688)">方法调用(隐藏搜索框)</el-button>

<script>
    import { getXy } from "yhht-ui/src/link-el";

    funGetxy(x, y) {
        getXy({
            lat: y,
            lng: x,
            locationMessage:(res)=>{  //定位消息回调
                console.log("locationMessage", res);
            },
            searchMessage:(res)=>{ //搜索消息回调
                console.log("searchMessage", res);
            },
            close:(xy)=>{  //关闭事件
                console.log(xy)
            }
        });
    },
    funGetxy2(x, y) {
      getXy({
        lat: y,
        lng: x,
        searchHide: true,
        locationMessage: (res) => {
          console.log("locationMessage", res);
        },
        searchMessage: (res) => {
          console.log("searchMessage", res);
        },
        close: (xy) => {
          console.log(xy);
        },
      });
    }
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