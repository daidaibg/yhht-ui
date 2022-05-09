<!--
 * @Author: daidai
 * @Date: 2022-02-09 15:00:59
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-09 17:44:23
 * @FilePath: \yhht-ui\src\components\Codes.vue
-->
<template>
  <div v-highlight :class="wrapClass">
    <pre><code  :class="codeType"><slot>{{ text }}</slot>  </code></pre>
  </div>
</template>

<script>
export default {
  props: {
    codeType: {
      type:String,
      default:()=>"language-javascript  "
    },
    text: {
      type:String,
      default:()=>""
    },
    wrapClass: {
      type:String,
      default:()=>""
    },
  },
  data() {
    return {};
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>