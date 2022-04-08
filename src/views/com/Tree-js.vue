<!--
 * @Author: daidai
 * @Date: 2021-09-03 09:51:38
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-28 14:11:20
 * @FilePath: \yhht-ui\src\views\com\Tree-js.vue
-->
<template>
  <div class="current_js">
    <h2 id="icon-tu-biao">树形数据转换</h2>
    <p>将Array数据转换成tree数据。</p>
    <h3>两种使用方法</h3>
    <div class="code_wrap">
      <p>
        <span style="color: rgb(175, 0, 219)">import</span>&nbsp;{&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >current</span
        >&nbsp;}&nbsp;<span style="color: rgb(175, 0, 219)">from</span
        >&nbsp;<span style="color: rgb(163, 21, 21)"
          >"yhht-ui/src/util"</span
        >;
      </p>
      //或
       <p>
        <span style="color: rgb(175, 0, 219)">import</span>&nbsp;{&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >treeDataTranslate</span
        >&nbsp;}&nbsp;<span style="color: rgb(175, 0, 219)">from</span
        >&nbsp;<span style="color: rgb(163, 21, 21)"
          >"yhht-ui/src/util/current"</span
        >;
      </p>
      <p>
        <span style="color: rgb(175, 0, 219)">export</span>&nbsp;<span
          style="color: rgb(175, 0, 219)"
          >default</span
        >&nbsp;{
      </p>
      <p>
        &nbsp;&nbsp;<span style="color: rgb(121, 94, 38)">data</span>()&nbsp;{
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(175, 0, 219)"
          >return</span
        >&nbsp;{};
      </p>
      <p>&nbsp;&nbsp;},</p>
      <p>
        &nbsp;&nbsp;<span style="color: rgb(121, 94, 38)">created</span
        >()&nbsp;{
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255)">var</span
        >&nbsp;<span style="color: rgb(0, 16, 128)">Arr</span>&nbsp;=&nbsp;[
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >name:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"第一个"</span>,
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >id:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"0"</span>,
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >name:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"第二级"</span>,
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >pid:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"0"</span>,
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >id:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"2"</span>,
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >name:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"第三级"</span>,
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >pid:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"2"</span>,
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >id:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"3"</span>,
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >name:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"第二个"</span>,
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >id:</span
        >&nbsp;<span style="color: rgb(163, 21, 21)">"20"</span>,
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255)">this</span
        >.<span style="color: rgb(121, 94, 38)">tree</span>(<span
          style="color: rgb(0, 16, 128)"
          >Arr</span
        >);
      </p>
      <p>&nbsp;&nbsp;},</p>
      <p>
        &nbsp;&nbsp;<span style="color: rgb(0, 16, 128)">methods:</span>&nbsp;{
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(121, 94, 38)">tree</span
        >(<span style="color: rgb(0, 16, 128)">Arr</span>)&nbsp;{
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255)"
          >let</span
        >&nbsp;<span style="color: rgb(0, 16, 128)">treeData</span
        >&nbsp;=&nbsp;<span style="color: rgb(121, 94, 38)"
          >treeDataTranslate</span
        >(<span style="color: rgb(0, 16, 128)">Arr</span>,&nbsp;<span
          style="color: rgb(163, 21, 21)"
          >"id"</span
        >,&nbsp;<span style="color: rgb(163, 21, 21)">"pid"</span>);
     
      </p>  
       <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255)"
          >let</span
        >&nbsp;<span style="color: rgb(0, 16, 128)">treeData2</span
        >&nbsp;=&nbsp;<span style="color: rgb(121, 94, 38)"
          >current.treeDataTranslate</span
        >(<span style="color: rgb(0, 16, 128)">Arr</span>,&nbsp;<span
          style="color: rgb(163, 21, 21)"
          >"id"</span
        >,&nbsp;<span style="color: rgb(163, 21, 21)">"pid"</span>);
     
      </p> 
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 16, 128)"
          >console</span
        >.<span style="color: rgb(121, 94, 38)">log</span>(<span
          style="color: rgb(0, 16, 128)"
          >treeData,treeData2</span
        >);
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;},</p>
      <p>&nbsp;&nbsp;},</p>
      <p>};</p>
    </div>
    <h3>转换后</h3>
    <div class="code_wrap">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;[</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >name:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"第一个"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"0"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >subs:</span
          >&nbsp;[
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >name:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"第二级"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >pid:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"0"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"2"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >_level:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">2</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >subs:</span
          >&nbsp;[{&nbsp;<span style="color: rgb(0, 16, 128)">name:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"第三级"</span
          >,&nbsp;<span style="color: rgb(0, 16, 128)">pid:</span>&nbsp;<span
            style="color: rgb(163, 21, 21)"
            >"2"</span
          >,&nbsp;<span style="color: rgb(0, 16, 128)">id:</span>&nbsp;<span
            style="color: rgb(163, 21, 21)"
            >"3"</span
          >,&nbsp;<span style="color: rgb(0, 16, 128)">_level:</span>&nbsp;<span
            style="color: rgb(9, 134, 88)"
            >3</span
          >&nbsp;}],
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >_level:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">1</span>,
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >name:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"第二个"</span
          >,&nbsp;<span style="color: rgb(0, 16, 128)">id:</span>&nbsp;<span
            style="color: rgb(163, 21, 21)"
            >"20"</span
          >&nbsp;},
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;];</p>
    </div>
    <h3>参数格式</h3>
    <div class="code_wrap">
      <p><span style="color: rgb(0, 128, 0)">/**</span></p>
      <p>
        <span style="color: rgb(0, 128, 0)"
          >&nbsp;*&nbsp;参数格式&nbsp;&nbsp;*&nbsp;号必填</span
        >
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp;*&nbsp;</span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(38, 127, 153)">{*Array}</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">arr</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;&nbsp;数据数组</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp;*&nbsp;</span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(38, 127, 153)">{*String}</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">id</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;&nbsp;自己本身id</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp;*&nbsp;</span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(38, 127, 153)">{*String}</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">pid</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;&nbsp;父级id</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp;*&nbsp;&nbsp;</span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(38, 127, 153)"
          >{String&nbsp;||&nbsp;Number}</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;</span
        ><span style="color: rgb(0, 16, 128)">order</span
        ><span style="color: rgb(0, 128, 0)">&nbsp;&nbsp;</span>
      </p>
      <p><span style="color: rgb(0, 128, 0)">&nbsp;*/</span></p>
      <p>
        <span style="color: rgb(121, 94, 38)">treeDataTranslate</span>(<span
          style="color: rgb(0, 16, 128)"
          >data</span
        >,&nbsp;<span style="color: rgb(0, 16, 128)">id</span>,&nbsp;<span
          style="color: rgb(0, 16, 128)"
          >pid</span
        >,&nbsp;<span style="color: rgb(0, 16, 128)">order</span>)
      </p>
    </div>
  </div>
</template>

<script>
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
      console.log(treeData);
    },
  },
};
</script>

<style lang="scss" >
</style>

