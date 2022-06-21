<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-23 10:08:01
 * @FilePath: \yhht-ui\src\views\com\Installation.vue
-->
<template>
  <div class="installation">
  
    <h2>修改默认主题</h2>
    
    <h3>使用css强制覆盖</h3>
    <p>
      如果使用的是vscode开发工具，提供了了<a :href="`/${historyUrl}/components/plugin`"
        >vscode插件
      </a>
      它能更好地和 yhht ui 配合使用。
    </p>
    <p>在 全局css 复制一下代码，修改以下所有颜色即可替换主题系列样式：</p>

    <code-light
      wrapClass="codes"
      codeType="less"
      text=":root{  /*主要颜色系列 */
    --yh-brand-color-1: #003f45;
    --yh-brand-color-2: #004c52;
    --yh-brand-color-3: #005860;
    --yh-brand-color-4: #00656e;
    --yh-brand-color-5: #005B62;
    --yh-brand-color-6: #018E9A;
    --yh-brand-color-7: #006a73;   /*向上主色 越浅 */
    --yh-brand-color: #007680;  /*主色调 */
    --yh-brand-color-9: #1a99a4;  /*向下主色 越浅 */
    --yh-brand-color-10: #33a4ae;
    --yh-brand-color-11:rgba(1,142,154,.6);
}"
    >
    </code-light>
    <h3>vscode更方便</h3>
    <p>
      您如果使用vscode 插件，可以在css文件中直接输入
      <span class="codelit">yh</span>
      vscode会给出提示,选择<span class="codelit">yh-root-brand-color</span>即可
    </p>
    <img src="../../../assets/img/vscode/css.png" alt="vscode样式快捷键"  style="max-width:100%"/>
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
