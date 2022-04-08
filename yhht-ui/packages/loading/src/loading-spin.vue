<!--
 * @Author: daidai
 * @Date: 2022-03-25 17:35:48
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-25 18:02:40
 * @FilePath: \yhht-ui\yhht-ui\packages\loading\src\loading-spin.vue
-->
<template>
    <svg
      viewBox="25 25 50 50"
      class="circular"
      :style="{width: width, height: height}"
    >
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
    </svg>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
      width:{
          type:String,
          default:()=>'100%'
      },
      height:{
          type:String,
          default:()=>'100%'
      }
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style  scoped>
.circular {
  /* animation: yh-spin 2s linear infinite; */
  animation: loading-rotate 2s linear infinite;
}
.circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 6;
  stroke:rgb(241, 240, 240);
  stroke-linecap: round;
}
@keyframes loading-rotate {
    to {
        transform: rotate(1turn)
    }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>