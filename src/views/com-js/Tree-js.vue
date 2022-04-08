<!--
 * @Author: daidai
 * @Date: 2021-09-03 09:51:38
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-09 17:36:09
 * @FilePath: \yhht-ui\src\views\com\Tree-js.vue
-->
<template>
  <div class="current_js">
    <h2 id="icon-tu-biao">树形数据转换</h2>
    <p>将Array数据转换成tree数据。</p>
    <h3>两种使用方法</h3>
      <code-light
      :text="text1"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <h3>转换后</h3>
        <code-light
      :text="text2"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <h3>参数格式</h3>
            <code-light
      :text="text3"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
  </div>
</template>

<script>
import { treeDataTranslate } from "yhht-ui/src/util/current";
export default {
  data() {
    return {
      text1:`import { current } from "yhht-ui/src/util"; 

 //或 
import { treeDataTranslate } from "yhht-ui/src/util/current"; 

export default { 
   data() { 
     return {}; 
  },
   created() { 
     var Arr = [ 
      {
         name: "第一个", 
         id: "0", 
      },
      {
         name: "第二级", 
         pid: "0", 
         id: "2", 
      },
      {
         name: "第三级", 
         pid: "2", 
         id: "3", 
      },
      {
         name: "第二个", 
         id: "20", 
      },
    ];
     this.tree(Arr); 
  },
   methods: { 
     tree(Arr) { 
       let treeData = treeDataTranslate(Arr, "id", "pid"); 
       let treeData2 = current.treeDataTranslate(Arr, "id", "pid"); 
       console.log(treeData,treeData2); 
    },
  },
};`,
text2:`[
  {
      name: "第一个", 
      id: "0", 
      subs: [ 
        { 
          name: "第二级", 
          pid: "0", 
          id: "2", 
          _level: 2, 
          subs: [{ name: "第三级", pid: "2", id: "3", _level: 3 }], 
        }, 
    ],
      _level: 1, 
  },
    { name: "第二个", id: "20" }, 
];
`,
text3:`
/**
 * 参数格式  * 号必填
 * @param {*Array} arr  数据数组
 * @param {*String} id  自己本身id
 * @param {*String} pid  父级id
 *  @param {String || Number} order  
 */

treeDataTranslate(data, id, pid, order) 
`
    };
  },
  created() {
    var Arr = [
      {
        name: "第一个",
        id: "0",
      },
      {
        name: "第二级",
        pid: "0",
        id: "2",
      },
      {
        name: "第三级",
        pid: "2",
        id: "3",
      },
      {
        name: "第二个",
        id: "20",
      },
    ];
    this.tree(Arr);
  },
  methods: {
    tree(Arr) {
      let treeData = treeDataTranslate(Arr, "id", "pid");
      console.log(treeData);
    },
  },
};
</script>

<style lang="scss" >
</style>

