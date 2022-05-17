<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-17 11:08:40
 * @FilePath: \yhht-ui\src\views\com\Installation.vue
-->
<template>
  <div class="installation">
    <h2>使用vscode插件</h2>
    <p>打开vscode插件市场，搜索yhht,选择yhht-ui安装即可,</p>
    <img src="../../../assets/img/vscode/plugin.png" alt="vscode插件搜索" style="max-width:100%">
    <h3>快捷键</h3>

    <code-light
      wrapClass="codes"
      codeType="less"
      text="yh //开头"
    >
    </code-light>
    <h3>vscode更方便</h3>
    <p>
      您如果使用vscode 插件，可以在vue文件中直接输入
      <span class="codelit">yh</span>
      vscode会给出提示,选择自己需要的即可
    </p>
    <img src="../../../assets/img/vscode/tem.png" alt=""   style="max-width:100%"/>
  </div>
</template>
<script>
export default {
  name: "installation",
};
</script>
<style lang="scss" scoped>
.installation {
}
</style>
