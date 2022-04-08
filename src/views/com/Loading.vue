<!--
 * @Author: daidai
 * @Date: 2021-12-07 10:11:20
 * @LastEditors: daidai
 * @LastEditTime: 2021-12-07 10:57:24
 * @FilePath: \yhht-ui\src\views\com\Loading.vue
-->
<template>
  <div class="loading-wrper">
    <code-wrap>
      <el-button type="primary" @click="qiehuan"> 切换类型</el-button>
      <el-button type="primary" @click="qiehuanBackground"> 切换背景</el-button>
      <div class="loading-wrap">
        <p style="">我是内容我是内容我是内容我是内容我是内容</p>
        <p style="">我是内容我是内容我是内容我是内容</p>
        <p style="">我是内容我是内容我是内容我是内容</p>
        <p style="">我是内容我是内容我是内容我是内容</p>
        <p style="">我是内容我是内容我是内容我是内容</p>
        <p style="">我是内容我是内容我是内容我是内容</p>
        <yh-loading :type="type" :background="background">加载中...</yh-loading>
      </div>
      <div slot="code">
       <p>&nbsp;<span style="color: rgb(128, 0, 0);">&lt;yh-loading</span> :<span style="color: rgb(255, 0, 0);">type</span>="<span style="color: rgb(0, 16, 128);">type</span>" :<span style="color: rgb(255, 0, 0);">background</span>="<span style="color: rgb(0, 16, 128);">background</span>"<span style="color: rgb(128, 0, 0);">&gt;</span>加载中...<span style="color: rgb(128, 0, 0);">&lt;/yh-loading&gt;</span></p>
        <p><span style="color: rgb(175, 0, 219);">export</span> <span style="color: rgb(175, 0, 219);">default</span> {</p><p>&nbsp; <span style="color: rgb(121, 94, 38);">data</span>() {</p><p>&nbsp; &nbsp; <span style="color: rgb(175, 0, 219);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">type:</span> <span style="color: rgb(163, 21, 21);">"lowKey"</span>,</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">background:</span> <span style="color: rgb(163, 21, 21);">"rgba(0,0,0,0.2)"</span>,</p><p>&nbsp; &nbsp; };</p><p>&nbsp; },</p><p>&nbsp; <span style="color: rgb(121, 94, 38);">created</span>() {},</p><p><br></p><p>&nbsp; <span style="color: rgb(121, 94, 38);">mounted</span>() {},</p><p>&nbsp; <span style="color: rgb(0, 16, 128);">methods:</span> {</p><p>&nbsp; &nbsp; <span style="color: rgb(121, 94, 38);">qiehuan</span>() {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(175, 0, 219);">if</span> (<span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">type</span> == <span style="color: rgb(163, 21, 21);">"lowKey"</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">type</span> = <span style="color: rgb(163, 21, 21);">"datav"</span>;</p><p>&nbsp; &nbsp; &nbsp; } <span style="color: rgb(175, 0, 219);">else</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">type</span> = <span style="color: rgb(163, 21, 21);">"lowKey"</span>;</p><p>&nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; },</p><p>&nbsp; &nbsp; <span style="color: rgb(121, 94, 38);">qiehuanBackground</span>() {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(175, 0, 219);">if</span> (<span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">background</span> == <span style="color: rgb(163, 21, 21);">"rgba(0,0,0,0.2)"</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">background</span> = <span style="color: rgb(163, 21, 21);">"rgba(40,220,200,0.2)"</span>;</p><p>&nbsp; &nbsp; &nbsp; } <span style="color: rgb(175, 0, 219);">else</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">background</span> = <span style="color: rgb(163, 21, 21);">"rgba(0,0,0,0.2)"</span>;</p><p>&nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; },</p><p>&nbsp; },</p><p>};</p>
      </div>
    </code-wrap>
      <table class="tables">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>type</td>
        <td>加载样式风格</td>
        <td>String</td>
        <td>datav  可选（datav，lowKey） </td>
      </tr>
      <tr>
        <td>background</td>
        <td>背景色</td>
        <td>String</td>
        <td>--</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "lowKey",
      background: "rgba(0,0,0,0.2)",
    };
  },
  created() {},

  mounted() {},
  methods: {
    qiehuan() {
      if (this.type == "lowKey") {
        this.type = "datav";
      } else {
        this.type = "lowKey";
      }
    },
    qiehuanBackground() {
      if (this.background == "rgba(0,0,0,0.2)") {
        this.background = "rgba(40,220,200,0.2)";
      } else {
        this.background = "rgba(0,0,0,0.2)";
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.loading-wrper {
  position: relative;
  height: 100%;
}
.loading-wrap {
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
}
</style>