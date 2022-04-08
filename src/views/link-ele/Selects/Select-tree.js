/*
 * @Author: daidai
 * @Date: 2022-02-11 14:24:33
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-11 14:26:08
 * @FilePath: \yhht-ui\src\views\link-ele\Selects\Select-tree.js
 */
export default {
    codeText:`<template>
    <yh-select-tree
        :props="props" 
        :options="options" 
        :value="valueId" 
        @select-change="select" 
        :default-expanded-keys="[valueId]" 
    />
</template>

<script>
   export default { 
   data() { 
       return { 
       valueId: 3, // 初始ID（可选）
       props: { 
           value: "id", 
           label: "label", 
           children: "children", 
       },
       options: [], 
       };
   },
   mounted() { 
       this.options = [ 
       {
           label: "一级 1", 
           id: "aa", 
           children: [ 
           {
               label: "二级 1-1", 
               id: 2, 
               children: [ 
               { 
                   label: "三级 1-1-1", 
                   id: 3, 
               }, 
               ], 
           },
           ],
       },
       {
           label: "一级 2", 
           id: 4, 
           children: [ 
           {
               label: "二级 2-1", 
               id: 5, 
               children: [ 
               { 
                   label: "三级 2-1-1", 
                   id: 6, 
               }, 
               ], 
           },
           {
               label: "二级 2-2", 
                   id: 7, 
                   children: [ 
                       {
                           id: 8, 
                           label: "三级 2-2-1", 
                       }, 
                   ], 
               },
           ],
       },
       ];
   },
   methods: { 
       // 发生变化
       select(value) { 
           this.valueId = value.id; 
           },
       },
   };
</script>`
}