<!--
 * @Author: daidai
 * @Date: 2022-02-11 10:00:54
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-25 17:07:25
 * @FilePath: \yhht-ui\src\components\scFormTable\table-code.vue
-->
<template>
  <div>
    <table class="tables">
      <tr>
        <th v-for="item in theads[type]" :key="item.val" :style="{minWidth:item.minWidth}">{{item.name}}</th>
      </tr>
      <tr v-for="(item, i) in data" :key="i">
        <td  v-for="keyItem in theads[type]" :key="keyItem.val">{{ item[keyItem.val] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theads: {
        param: [
          { name: "参数", val: "key" },
          { name: "说明", val: "explain",minWidth:'100px' },
          { name: "类型", val: "type" },
          { name: "默认值", val: "def" },
          { name: "可选值", val: "opt" },
        ],
        events:[
          { name: "事件名称", val: "method" },
          { name: "说明", val: "explain" },
          { name: "参数", val: "parms" }
        ],
        funs:[
             { name: "方法名", val: "name" },
          { name: "说明", val: "explain" },
        ]
      },
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    type: {
      type: [String, Number],
      default: () => "param",
    },
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style lang='' scoped>
</style>