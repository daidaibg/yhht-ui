<template>
  <div class="yh-treeselect">
    <el-select
      :value="valueTitle"
      :clearable="clearable"
      @clear="clearHandle"
      class="yh-select-tree"
      @visible-change="visibleChange"
      :placeholder="placeholder"
      :size="size"
      ref="elSelect"
    >
      <el-option :value="valueTitle" :label="valueTitle" class="options">
        <el-tree
          id="tree-option"
          ref="tree"
          :highlight-current="highlightCurrent"
          :accordion="accordion"
          :data="options"
          :props="props"
          :default-expand-all="defaultExpandAll"
          :expand-on-click-node="expandOnClickNode"
          :node-key="props.value"
          :default-expanded-keys="defaultExpandedKeys"
          @node-click="handleNodeClick"
        >
        </el-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "yh-select-tree",
  props: {
    // 配置项
    props: {
      type: Object,
      default: {
        value: "id", // ID字段名
        label: "label", // 显示名称
        children: "children", // 子级字段名
      },
    },
    // 选项列表数据(树形结构的对象数组)
    options: { type: Array },
    // 初始值
    value: { type: [String, Number, Boolean], default: null },
    // 可清空选项
    clearable: { type: Boolean, default: true },
    // 是否每次只打开一个同级树节点展开
    accordion: { type: Boolean, default: false },
    //占位符
    placeholder: { type: String, default: "请选择" },
    // 默认展开的节点的 key 的数组
    defaultExpandedKeys: { type: Array, default: () => [] },
    // 是否高亮当前选中节点，默认值是 true
    highlightCurrent: { type: Boolean, default: true },
    // 是否默认展开所有节点
    defaultExpandAll: { type: Boolean, default: false },
    //是否在点击节点的时候展开或者收缩节点，
    expandOnClickNode: { type: Boolean, default: false },
    //输入框尺寸	medium/small/mini
    size: { type: String, default: "" },
  },
  data() {
    return {
      valueId: null,
      valueTitle: "",
      titleS: [],
    };
  },
  mounted() {
    // console.log(this.value)
    this.valueId = this.value;
    if (this.options.length > 0) {
      this.initHandle();
    }
  },
  model: {
    prop: "value",
    event: "change",
  },
  updated() {
    this.initHandle();
  },
  methods: {
    visibleChange(falag) {},
    // 初始化值
    initHandle() {
      if (this.valueId !== undefined && this.valueId !== null) {
        let valueNode = this.$refs.tree.getNode(this.valueId);
        if (!valueNode) return;
        this.valueTitle = valueNode.data[this.props.label];
        // console.log(this.valueTitle)
        // this.$emit("select-change", valueNode);
        this.$refs.tree.setCurrentKey(this.valueId); // 设置默认选中
      } else {
        // this.$refs.tree.setCurrentKey();
      }
    },
    // 切换选项
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label];
      this.valueId = node[this.props.value];
      this.$emit("change", this.valueId);
      this.$emit("select-change", node);
      this.$refs.elSelect.blur();
      this.$refs.elSelect.focus();
    },

    // 清除选中
    clearHandle() {
      this.valueTitle = "";
      this.valueId = null;
      this.$emit("change", this.valueId);
      this.$emit("select-change", {
        [this.props.label]: "",
        [this.props.value]: null,
      });
    },
    //返回el tree node
    getElTree() {
      return this.$refs.tree;
    },
  },

  watch: {
    value() {
      // console.log(this.value)
      this.valueId = this.value;
      this.initHandle();
    },
  },
};
</script>

<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  padding: 0;
}
 :deep(.el-tree-node):focus > .el-tree-node__content {
  background-color: transparent;
}

/* 
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
*/
</style>
