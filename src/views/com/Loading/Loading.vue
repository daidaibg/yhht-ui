<!--
 * @Author: daidai
 * @Date: 2021-12-07 10:11:20
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-11 14:16:13
 * @FilePath: \yhht-ui\src\views\com\Loading\Loading.vue
-->
<template>
  <div class="loading-wrper">
    <code-wrap :codeText="codeText.loadingCOde">
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
import loadingCode from './loading'
export default {
  data() {
    return {
      type: "lowKey",
      background: "rgba(0,0,0,0.2)",
      codeText:loadingCode
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