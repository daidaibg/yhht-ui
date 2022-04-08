<!--
 * @Author: daidai
 * @Date: 2021-09-18 16:03:48
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-22 15:43:55
 * @FilePath: \yhht-ui\src\views\com\yhProgress.vue
-->
<template>
  <div class="yhProgress">
    <h2 id="icon-tu-biao">页面进度条</h2>
    <h3>例子</h3>
    <el-button @click="start">开启页面进度条</el-button>
    <el-button @click="done">关闭页面进度条</el-button>


    <h3>引入</h3>
    <div class="code_wrap">
      <p>
        <span style="color: rgb(175, 0, 219)">import</span>&nbsp;{<span
          style="color: rgb(0, 16, 128)"
          >yhProgress</span
        >}&nbsp;<span style="color: rgb(175, 0, 219)">from</span>&nbsp;<span
          style="color: rgb(163, 21, 21)"
          >'yhht-ui/src/util'</span
        >;
      </p>
    </div>
    <h3>配置</h3>
    <p>可以现在main引入配以下，进行配置后就是全局配置;</p>
    <div class="code_wrap">
      <p>
        <span style="color: rgb(0, 16, 128)">yhProgress</span>.<span
          style="color: rgb(121, 94, 38)"
          >configure</span
        >({&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        &nbsp;<span style="color: rgb(0, 16, 128)">easing:</span>&nbsp;<span
          style="color: rgb(163, 21, 21)"
          >'ease'</span
        >,&nbsp;&nbsp;<span style="color: rgb(0, 128, 0)"
          >//&nbsp;动画方式&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
      </p>
      <p>
        &nbsp;&nbsp;<span style="color: rgb(0, 16, 128)">color:</span
        ><span style="color: rgb(163, 21, 21)">"green"</span>,&nbsp;<span
          style="color: rgb(0, 128, 0)"
          >//颜色</span
        >
      </p>
      <p>
        <span style="color: rgb(175, 0, 219)">&nbsp;&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">speed:</span>&nbsp;<span
          style="color: rgb(9, 134, 88)"
          >500</span
        >,&nbsp;&nbsp;<span style="color: rgb(0, 128, 0)"
          >//&nbsp;递增进度条的速度&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
      </p>
      <p>
        <span style="color: rgb(175, 0, 219)">&nbsp;&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">showSpinner:</span>&nbsp;<span
          style="color: rgb(0, 0, 255)"
          >false</span
        >,&nbsp;<span style="color: rgb(0, 128, 0)"
          >//&nbsp;是否显示加载ico&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
      </p>
      <p>
        <span style="color: rgb(175, 0, 219)">&nbsp;&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">trickleSpeed:</span>&nbsp;<span
          style="color: rgb(9, 134, 88)"
          >200</span
        >,&nbsp;<span style="color: rgb(0, 128, 0)"
          >//&nbsp;自动递增间隔&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
      </p>
      <p>
        <span style="color: rgb(175, 0, 219)">&nbsp;&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">minimum:</span>&nbsp;<span
          style="color: rgb(9, 134, 88)"
          >0.3</span
        >,&nbsp;<span style="color: rgb(0, 128, 0)"
          >//&nbsp;初始化时的最小百分比</span
        >
      </p>
      <p><span style="color: rgb(175, 0, 219)">})</span></p>
    </div>
    <h3>使用</h3>
    <p>开始后&nbsp;不结束是不会停的</p>
    <div class="code_wrap">
      <p>
        &nbsp;<span style="color: rgb(0, 128, 0)"
          >//开始&nbsp;不结束是不会停的</span
        >
      </p>
      <p>
        &nbsp;<span style="color: rgb(0, 16, 128)">yhProgress</span>.<span
          style="color: rgb(121, 94, 38)"
          >start</span
        >()
      </p>
      <p><span style="color: rgb(0, 128, 0)">//结束&nbsp;</span></p>
      <p>
        &nbsp;<span style="color: rgb(0, 16, 128)">yhProgress</span>.<span
          style="color: rgb(121, 94, 38)"
          >done</span
        >()
      </p>
      <p><br /></p>
    </div>
  </div>
</template>

<script>
import { yhProgress } from "yhht-ui/src/util";

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
 
  },
  methods: {
    start() {
      yhProgress.configure({
        easing: "ease", // 动画方式
        speed: 500, // 递增进度条的速度
        showSpinner: false, // 是否显示加载ico
        trickleSpeed: 200, // 自动递增间隔
        color: "green", //颜色
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