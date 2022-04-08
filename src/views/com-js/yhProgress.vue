<!--
 * @Author: daidai
 * @Date: 2021-09-18 16:03:48
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 09:04:46
 * @FilePath: \yhht-ui\src\views\com-js\yhProgress.vue
-->
<template>
  <div class="yhProgress">
    <h2 id="icon-tu-biao">页面进度条</h2>
    <h3>例子</h3>
    <el-button @click="start">开启页面进度条</el-button>
    <el-button @click="done">关闭页面进度条</el-button>

    <h3>引入</h3>
    <div class="warning">
      <p>需要引入css文件,否则没效果。</p>
    </div>
    <code-light
      text="import {yhProgress} from 'yhht-ui/src/util' ;
import 'yhht-ui/lib/theme/nprogress.css'; "
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <h3>配置</h3>
    <p>可以现在main引入配以下，进行配置后就是全局配置;</p>
       <code-light
      :text="text1"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <h3>使用</h3>
    <p>开始后&nbsp;不结束是不会停的</p>
      <code-light
      :text="text2"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
  </div>
</template>

<script>
import { yhProgress } from "yhht-ui/src/util";

export default {
  data() {
    return {
      text1:`yhProgress.configure({      
  easing: 'ease',  // 动画方式    
  color:"green", //颜色
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3, // 初始化时的最小百分比

})`,
text2:`//开始 不结束是不会停的
  yhProgress.start() 
  //结束 
  yhProgress.done() `
    };
  },
  created() {},
  mounted() {},
  methods: {
    start() {
      yhProgress.configure({
        easing: "ease", // 动画方式
        speed: 500, // 递增进度条的速度
        showSpinner: false, // 是否显示加载ico
        trickleSpeed: 200, // 自动递增间隔
        color: "red", //颜色
        minimum: 0.3, // 初始化时的最小百分比
      });
      //开始 不结束是不会停的
      yhProgress.start();
    },
    done() {
      //结束
      yhProgress.done();
    },
  },
};
</script>
<style lang='scss' scoped>
.file_wrap {
  width: 100%;
  height: 500px;
}
//   #nprogress .bar {
//       background: red !important; //自定义颜色
//     }
</style>