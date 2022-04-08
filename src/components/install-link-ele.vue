<!--
 * @Author: daidai
 * @Date: 2021-09-28 16:01:56
 * @LastEditors: daidai
 * @LastEditTime: 2021-12-13 09:18:18
 * @FilePath: \yhht-ui\src\components\install-link-ele.vue
-->
<template>
  <div>
    <h2>结合element 引入和使用</h2>
    <p>
      此模块下的都需要结合element来使用,您需要先安装<a
        href="https://element.eleme.cn/#/zh-CN/component/installation"
        >element</a
      >
    </p>
    <div class="code_wrap">
      <p>
        <span style="color: rgb(175, 0, 219)">import</span>&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >yhAndEleUi</span
        >&nbsp;<span style="color: rgb(175, 0, 219)">from</span>&nbsp;<span
          style="color: rgb(163, 21, 21)"
          >'yhht-ui/src/link-el'</span
        >
      </p>
      <p><span style="color: rgb(0, 128, 0)">//可以直接跟在后面</span></p>
      <p>
        <span style="color: rgb(38, 127, 153)">Vue</span>.<span
          style="color: rgb(121, 94, 38)"
          >use</span
        >(<span style="color: rgb(0, 16, 128)">yhhtUi</span>).<span
          style="color: rgb(121, 94, 38)"
          >use</span
        >(<span style="color: rgb(0, 16, 128)">yhAndEleUi</span>)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style  scoped>
</style>