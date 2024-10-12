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

      <code-light text="import yhAndEleUi from 'yhht-ui/src/link-el'
//可以直接跟在后面
Vue.use(yhhtUi).use(yhAndEleUi) "></code-light>
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
  methods: {
  },
};
</script>
<style  scoped>
</style>