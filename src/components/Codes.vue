
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