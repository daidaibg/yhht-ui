<!--
 * @Author: daidai
 * @Date: 2021-09-13 10:07:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-13 09:20:55
 * @Descripttion: 图像裁剪组件
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\table-pag\src\main.vue
-->

<template>
  <div
    class="table-pag"
    v-loading="loading"
    :element-loading-text="loadingText"
    :element-loading-spinner="loadingSpinne"
    :element-loading-background="loadingBackground"
  >
    <el-table
    
    ref="el_table"
      :data="data"
      style="width: 100%"
      v-bind="$attrs"
      v-on="$listeners"
      :size="size"
      :width="width"
      :maxHeight="maxHeight"
      :height="height"
      :stripe="stripe"
      :border="border"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :header-row-class-name="headerRowClassName"
      :header-row-style="headerRowStyle"
      :header-cell-class-name="headerCellClassName"
      :header-cell-style="headerCellStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :select-on-indeterminate="selectOnIndeterminate"
      @select="(selection, row) => $emit('select', selection, row)"
      @select-all="(selection) => $emit('select-all', selection)"
      @selection-change="(selection) => $emit('selection-change', selection)"
      @cell-mouse-enter="
        (row, column, cell, event) =>
          $emit('cell-mouse-enter', row, column, cell, event)
      "
      @cell-mouse-leave="
        (row, column, cell, event) =>
          $emit('cell-mouse-leave', row, column, cell, event)
      "
      @cell-click="
        (row, column, cell, event) =>
          $emit('cell-click', row, column, cell, event)
      "
      @cell-dblclick="
        (row, column, cell, event) =>
          $emit('cell-dblclick', row, column, cell, event)
      "
      @row-click="
        (row, column, event) => $emit('row-click', row, column, event)
      "
      @row-contextmenu="
        (row, column, event) => $emit('row-contextmenu', row, column, event)
      "
      @row-dblclick="
        (row, column, cell) => $emit('row-dblclick', row, column, cell)
      "
      @header-click="(column, event) => $emit('header-click', column, event)"
      @header-contextmenu="
        (column, event) => $emit('header-contextmenu', column, event)
      "
    >
      <slot />
    </el-table>
    <div class="pagination_wrap">
      <el-pagination
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="paginationData.currentPage"
        :page-size="paginationData.pageSize"
        :page-sizes="pageSizes"
        :layout="layout"
        :total="total"
        v-on="$listeners"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "yhTablePag",
  props: {
    data: { type: Array, default: () => [] },
    inPageGetData: { type: Boolean, default: () => true },
    loading: { type: Boolean, default: () => false },
    loadingSpinne: { type: String, default: () => "el-icon-loading" },
    loadingText: { type: String, default: () => "拼命加载中..." },
    loadingCustomClass: String,
    total: { type: Number, default: () => 0 },
    loadingBackground: String,
    layout: {
      type: String,
      default: () => "total,sizes, prev, pager, next,jumper",
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true,
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    context: {},
    showHeader: {
      type: Boolean,
      default: true,
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
    selectOnIndeterminate: {
      type: Boolean,
      default: true,
    },
    currentPage:{
      type:Number,
      default:()=>1
    },
    pageSize:{
      type:Number,
      default:()=>10
    },
    pageSizes:{
      type:Array,
      default:()=>[10, 20, 30, 50,100]
    },
  },
  data() {
    return {
      crop: null,
      Total: 100,
      paginationData: {
        pageSize: 10,
        currentPage: 1,
      },
    };
  },
  watch: {
    currentPage(newval){
      this.paginationData.currentPage =newval
    },
    pageSize(newval){
      this.paginationData.pageSize =newval
    }
  },
  mounted() {
    this.paginationData.currentPage =this.currentPage
    this.paginationData.pageSize =this.pageSize
    if (this.inPageGetData) this.handleCurrentChange();
  },
  methods: {
    doLayout(){
      this.$refs.el_table.doLayout()
    },
    selectionChange(val) {
      this.$emit("selection-change", val);
    },
    //数量发生变化
    handleSizeChange(val) {
      this.paginationData.pageSize = val;
      this.$emit("getData", this.paginationData);
    },
    //页数发生变化
    handleCurrentChange() {
      this.$emit("getData", this.paginationData);
    },
  },
};
</script>

<style scoped>
.table-pag .pagination_wrap {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
}
</style>
