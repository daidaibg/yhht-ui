<!--
 * @Author: daidai
 * @Date: 2021-09-30 15:00:52
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 10:00:12
 * @FilePath: \yhht-ui\src\components\Code-wrap.vue
-->
<template>
  <div
    class="code-wrap"
    ref="codewrap"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="demo_wrap">
      <slot></slot>
    </div>
    <div class="code-inner-wrap" :style="{ height: `${codeH}px` }">
      <div class="code_wrap" ref="codeinner">
        <slot name="code"> <code-light :text="codeText"></code-light></slot>
      </div>
    </div>
    <div
      class="inout"
      @click="setShow"
      ref="inout"
      :class="{ 'is-fixed': isfixed }"
      :style="style"
    >
      <i
        :class="[
          show ? 'el-icon-caret-top' : 'el-icon-caret-bottom',
          { hovering: hovering },
        ]"
      ></i>
      <transition name="text-slide">
        <span v-show="hovering"> {{ show ? "隐藏代码" : "显示代码" }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isflexd: false,
      style: "",
      hovering: false,
      codeH: 0,
      isfixed: false,
    };
  },
  props: {
    codeText: "",
  },
  created() {},
  computed: {
    clientHeight() {
      return document.documentElement.clientHeight;
    },
  },
  mounted() {},
  beforeDestroy() {
    //  document.removeEventListener("scroll", this.handleScrollx, true);
    this.removeScrollHandler();
  },
  methods: {
    setShow() {
      this.show = !this.show;
      document.removeEventListener("scroll", this.handleScrollx, true);
      if (this.show) {
        this.codeH = this.$refs.codeinner.offsetHeight;

        this.style = `width:${this.$refs.codewrap.offsetWidth}px`;
        this.$nextTick(() => {
          this.handleScrollx();
          // document.addEventListener("scroll", this.handleScrollx, true);
          this.scrollParent = document.querySelector(
            "#content-scroll > .el-scrollbar__wrap"
          );
          this.scrollParent &&
            this.scrollParent.addEventListener("scroll", this.handleScrollx);
          this.handleScrollx();
        });
      } else {
        this.codeH = 0;
        this.isfixed = false;
        this.removeScrollHandler();
      }
    },
    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.handleScrollx);
    },
    handleScrollx(e) {
      const { top, bottom, left } =
        this.$refs.codeinner.getBoundingClientRect();
      const clientHeight = document.documentElement.clientHeight;
      // console.log(
      //   "top, bottom, left,clientHeight",
      //   top,
      //   bottom,
      //   left,
      //   clientHeight
      // );
      this.isfixed = bottom > clientHeight && top + 44 <= clientHeight;
    },
  },
};
</script>
<style lang='scss' scoped>
.code-wrap{
  .code_wrap{
    border-bottom: none;
  }
}
.inout {
  border: 1px solid var(--yh-component-stroke);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--yh-bg-color-container);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
  line-height: 44px;

  i {
    font-size: 16px;
    line-height: 44px;
    transition: 0.3s;
    &.hovering {
      transform: translateX(-40px);
    }
  }
  span {
    position: absolute;
    transform: translateX(-30px);
    font-size: 14px;
    line-height: 44px;
    transition: 0.3s;
    display: inline-block;
  }
  &:hover {
    color: var(--yh-text-color-brand);
    background-color: var(--yh-bg-color-container-hover);
  }

  .text-slide-enter,
  .text-slide-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }
}
.is-fixed {
  position: fixed;
  bottom: 0;
}
.code-inner-wrap {
  //   background-color: #fafafa;
  //   border-top: solid 1px #eaeefb;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
}
.demo_wrap {
  border: solid 1px var(--yh-component-stroke);
  border-bottom: none;
  padding: 24px;
}
</style>