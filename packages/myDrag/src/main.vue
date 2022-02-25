<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <!-- <div  v-if="visible"  class="myDrag_wrapper">    </div>
    
     -->
      <div
        class="myDrag"
        :style="style"
        ref="drag"
        aria-modal="true"
        :aria-label="title || 'dragdialog'"
         v-if="visible"
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
    width: {
      type: Number,
      default: () => {
        return 660;
      },
    },
    borderRadius: {
      type: Number,
      default: () => {
        return 0;
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
  watch: {},
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
    // if appendToBody is true, remove DOM node after destroy
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
.myDrag_wrapper{
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: rgba(119, 119, 119, 0.1); */
  top: 0;
  left: 0;
   overflow: auto;
    margin: 0
}
.myDrag {
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
  background: var( --yh-bg-color-comtitle);
  
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