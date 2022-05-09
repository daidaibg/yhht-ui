<template>
  <div class="drags">
    <h2>拖拽弹窗</h2>
    <p>简单的拖拽弹窗外壳</p>
    <h3>基本使用</h3>
    <code-wrap
      :codeText="text.dragtext"
      code-type="xml"
      style="position: relative"
    >
      <yh-button theme="primary" @click="openDrag">打开弹窗</yh-button>
      <yh-button theme="primary" @click="visible2=true">遮罩弹窗</yh-button>

    </code-wrap>
    <TableParam :data="dragData" />
    <h2>slot</h2>
    <table class="tables">
      <tr>
        <th>name</th>
        <th>说明</th>
        <th>使用</th>
      </tr>
      <tr>
        <td>header</td>
        <td>标题修饰可以完全自己写</td>
        <td>{{ slot }}</td>
      </tr>
      <tr>
        <td>close</td>
        <td>关闭按钮</td>
        <td>{{ closeSlot }}</td>
      </tr>
    </table>

    <yh-drag
      :visible.sync="visible"
      :width="600"
      title="弹窗"
      titleAlign="center"
      :showClose="true"
      :borderRadius="10"
      :model="false"
    >
      <div class="content">内容</div>
    </yh-drag>

    <yh-drag
      :visible.sync="visible2"
      :width="600"
      title="遮罩弹窗"
      :borderRadius="10"
      :model="true"
    >
      <div class="content">遮罩弹窗内容</div>
    </yh-drag>
  </div>
</template>
<script>
import dragCodeText from "./drag.js";
export default {
  data() {
    return {
      visible: false,
      visible2:false,
      text: dragCodeText,
      slot: `<div slot="header"></div>`,
      closeSlot: `<div slot="close"></div>`,
      dragData: [
        {
          key: "visible.sync",
          explain: "控制弹窗显示隐藏",
          type: "Boolean",
          opt: "--",
          def: "false",
        },
        {
          key: "before-close",
          explain: "关闭前回调",
          type: "function(done)，done 用于关闭 Dialog",
          opt: "--",
          def: "--",
        },
        {
          key: "width",
          explain: "弹窗的宽度(px)",
          type: "Number",
          opt: "--",
          def: "660",
        },
        {
          key: "top",
          explain: "距离顶部高度",
          type: "String",
          opt: "--",
          def: "20vh",
        },
        {
          key: "model",
          explain: "是否显示遮罩，不显示的话默认可以操作背景内容",
          type: "Boolean",
          opt: "--",
          def: "false",
        },
        {
          key: "title",
          explain: "弹窗头部名称",
          type: "String",
          opt: "--",
          def: "--",
        },
        {
          key: "titleBackgronud",
          explain: "title的背景色",
          type: "String",
          opt: "--",
          def: "#039ACD",
        },
        {
          key: "disable-drag",
          explain: "是否禁止拖拽",
          type: "Boolean",
          opt: "--",
          def: "false",
        },
        {
          key: "title-align",
          explain: "title字体位置",
          type: "String",
          opt: "left,center,right",
          def: "left",
        },
        {
          key: "close-style",
          explain: "关闭按钮样式",
          type: "String",
          opt: "--",
          def: "color: #000;",
        },
        {
          key: "border-radius",
          explain: "圆角",
          type: "Number",
          opt: "--",
          def: "6",
        },
        {
          key: "show-close",
          explain: "是否显示关闭按钮",
          type: "Boolean",
          opt: "--",
          def: "true",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    openDrag() {
      this.visible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100px;
}
.yh-button+.yh-button{
  margin-left: 12px;
}
</style>
