<template>
  <transition
    name="yh-drag-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="myDrag_wrapper" v-show="visible" :class="{ 'yh-model': model }">
      <div
        class="myDrag"
        :style="style"
        ref="drag"
        aria-modal="true"
        :aria-label="title || 'dragdialog'"
      >
        <div class="myDrag_title" @mousedown.prevent="move">
          <slot name="header">
            <div
              :style="`background:${titleBackgronud};text-align:${titleAlign};border-radius:${borderRadius}px ${borderRadius}px  0 0 `"
              class="title-text"
            >
              {{ title }}
            </div>
          </slot>
          <div class="drag-top-right">
            <slot name="close">
              <i
                class="yh-icons-close"
                @click="handleClose"
                :style="closeStyle"
                v-if="showClose"
              ></i>
            </slot>
          </div>
        </div>

        <div class="myDrag_body">
          <slot></slot>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import { Drag } from "../../../src/util/current";
export default {
  name: "YhDrag",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    isIf: {
      type: Boolean,
      default: true,
    },
    model: {
      type: Boolean,
      default: false,
    },
    disableDrag:{
       type: Boolean,
        default: false,
    },
    width: {
      type: Number,
      default: () => {
        return 660;
      },
    },
    borderRadius: {
      type: Number,
      default: () => {
        return 6;
      },
    },
    titleBackgronud: {
      type: String,
      default: () => {
        return "";
      },
    },
    titleAlign: {
      type: String,
      default: "left",
    },
    top: {
      type: String,
      default: () => {
        return "20vh";
      },
    },
    title: {
      type: String,
      default: () => {
        return "";
      },
    },
    beforeClose: Function,
    closeStyle: String,
    showClose: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
  },
  watch: {

  },
  computed: {
    style() {
      let style = {};
      if (this.width) {
        style.width = this.width + "px";
        style.marginLeft = -(this.width / 2) + "px";
      }
      style.top = this.top;
      style.borderRadius = this.borderRadius + "px";
      return style;
    },
  },

  mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }

  
  },
  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  methods: {
    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
      }
    },
    move(e) {
      if(this.disableDrag){
        return false
      }
      return Drag(e, this.$refs.drag, this.width / 2);
    },
    afterLeave() {
      this.$emit("closed");
    },
    afterEnter() {
      this.$emit("opened");
    },
  },
};
</script>

<style scoped>
.yh-drag-fade-enter-active {
  
  -webkit-animation: yh-drag-fade-in 0.3s;
  animation: yh-drag-fade-in 0.3s;
}

.yh-drag-fade-leave-active {
  -webkit-animation: yh-drag-fade-out 0.3s;
  animation: yh-drag-fade-out 0.3s;
}
@keyframes yh-drag-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes yh-drag-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

.myDrag_wrapper {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  top: 0;
  left: 0;
  overflow: auto;
}
.myDrag_wrapper.yh-model {
  pointer-events: all;
  position: fixed;
  /* background: rgba(0, 0, 0, 0.5); */
  background: var( --yh-mask-active);
  height: calc(100% + 20px);

  margin: 0;
}
.myDrag {
  pointer-events: all;
  position: absolute;
  z-index: 999;
  top: 30px;
  margin-left: -330px;
  left: 50%;
  width: 660px;
  background: var(--yh-bg-color-container);
  color: var(--yh-text-color-primary);
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-shadow: var(--yh-shadow-1);
}
.myDrag > .myDrag_title {
  width: 100%;
  height: 40px;
  cursor: move;
  text-align: left;
  line-height: 40px;
  font-size: 14px;
  color: var(--yh-text-color-anti);
}
.title-text {
  box-sizing: border-box;
  padding: 0 12px;
  width: 100%;
  height: 100%;
  background: var(--yh-brand-color);
  background: var(--yh-bg-color-comtitle);
}
.myDrag > .myDrag_title .drag-top-right {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
}

.myDrag > .myDrag_title .drag-top-right i {
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  color: var(--yh-text-color-primary);
}
.myDrag > .myDrag_body {
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  min-height: 30px;
}
</style>