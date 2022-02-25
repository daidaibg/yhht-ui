<!--
 * @Author: daidai
 * @Date: 2021-12-06 16:58:10
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-24 11:51:04
 * @FilePath: \yhht-ui\yhht-ui\packages\loading\src\loading-home.vue
-->
<template>
  <div class="first-loading-wrp">
    <div class="loading-wrp">
      <span class="dot dot-spin">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
    <div class="loading-tip">
      <slot />
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
<style lang='css' scoped>
@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
.first-loading-wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.first-loading-wrp > h1 {
  font-size: 30px;
  font-weight: bolder;
}

.first-loading-wrp .loading-wrp {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 50px;
  font-size: 50px;
  transform: rotate(45deg);
  animation: antRotate 1.2s infinite linear;
}

.dot i {
  position: absolute;
  display: block;
  width: 22px;
  height: 22px;
  background-color: var(--yh-brand-color);
  border-radius: 100%;
  opacity: 0.3;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  animation: antSpinMove 1s infinite linear alternate;
}

.dot i:nth-child(1) {
  top: 0;
  left: 0;
}

.dot i:nth-child(2) {
  top: 0;
  right: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.dot i:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.dot i:nth-child(4) {
  bottom: 0;
  left: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}
.loading-tip{
    padding: 10px 0;
     font-size: 14px;
}
</style>