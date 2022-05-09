<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-09 12:04:39
 * @FilePath: \yhht-ui\src\views\com\Installation.vue
-->
<template>
  <div class="installation">
    <h2>安装</h2>
    <h3>npm 安装</h3>
    <p>
      推荐使用 npm 的方式安装，它能更好地和
      <a href="https://webpack.js.org/">webpack</a> 打包工具配合使用。
    </p>
    <div class="codes"><code-light text="npm i yhht-ui -S"></code-light></div>

    <h2>快速使用</h2>
    <h3>引入 yhht-ui</h3>
    <p>你可以引入整个 yhht-ui 。考虑到大小问题：引入完整的yhht-ui并不会把结合element的组件引入进来，需要单独引入。</p>
    <h4>完整引入</h4>
    <p>在 main.js 中写入以下内容：</p>

    <code-light
      wrapClass="codes"
      text="import Vue from'vue';
import yhhtUi from 'yhht-ui';
import 'yhht-ui/lib/theme/index.css';
import App from './App.vue';
  
Vue.use(yhhtUi);

new Vue({
  el: '#app',
  render: h => h(App)
});"
    >
    </code-light>

    <p>以上代码便完成了 yhht-ui 的引入。需要注意的是，样式文件需要单独引入。</p>

    <h3>按需引入 yhht-ui</h3>
    <code-light
      wrapClass="codes"
      text="import Vue from'vue';
import {Button} from 'yhht-ui';
import 'yhht-ui/lib/theme/index.css';
import App from './App.vue';
Vue.use(Button);
new Vue({
  el: '#app',
  render: h => h(App)
});"
    >
    </code-light>
    <h4>或者文件中引入</h4>
    <div class="warning">
      <p>因组件不多，组件css集成在一个css，css需要再入口（main.js） 引入</p>
    </div>
    <code-light
      wrapClass="codes"
      text="
//main.js
import 'yhht-ui/lib/theme/index.css';
//组件内      
import {Button} from 'yhht-ui';
export default {
  components:{[Button.name]:Button},
}"
    >
    </code-light>
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
