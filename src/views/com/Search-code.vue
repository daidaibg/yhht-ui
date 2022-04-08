<!--
 * @Author: daidai
 * @Date: 2021-09-13 14:53:09
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-21 17:00:14
 * @FilePath: \yhht-ui\src\views\com\Search-code.vue
-->
<template>
  <div>
    <p>&nbsp;<span style="color: rgb(128, 0, 0)">&lt;yh-search</span></p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(255, 0, 0)">v-model</span>="<span
        style="color: rgb(0, 16, 128)"
        >value</span
      >"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0)"
        >listTotal</span
      >="<span style="color: rgb(0, 16, 128)">total</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0)"
        >config</span
      >="<span style="color: rgb(0, 16, 128)">config</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(255, 0, 0)">ref</span>=<span
        style="color: rgb(0, 0, 255)"
        >"yhSearch"</span
      >
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0)"
        >input</span
      >="<span style="color: rgb(0, 16, 128)">input</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0)"
        >clickTip</span
      >="<span style="color: rgb(0, 16, 128)">clickTip</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0)"
        >clickList</span
      >="<span style="color: rgb(0, 16, 128)">clickList</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0)"
        >location</span
      >="<span style="color: rgb(0, 16, 128)">location</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0)"
        >delete</span
      >="<span style="color: rgb(0, 16, 128)">deletes</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&gt;</span>
    </p>
    <p>&nbsp; &nbsp; &nbsp;</p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;div</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(255, 0, 0)">slot</span>=<span
        style="color: rgb(0, 0, 255)"
        >"prepend"</span
      >
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(255, 0, 0)">style</span>=<span
        style="color: rgb(0, 0, 255)"
        >"color: #cecece; height: 100%"</span
      >
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(255, 0, 0)">class</span>=<span
        style="color: rgb(0, 0, 255)"
        >"flex-center"</span
      >
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {{
      <span style="color: rgb(0, 16, 128)">prependText</span> }}
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;/div&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;template</span>
      <span style="color: rgb(255, 0, 0)">slot</span>=<span
        style="color: rgb(0, 0, 255)"
        >"tip-up"</span
      ><span style="color: rgb(128, 0, 0)">&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;ul</span>
      <span style="color: rgb(255, 0, 0)">class</span>=<span
        style="color: rgb(0, 0, 255)"
        >"tip-ups"</span
      ><span style="color: rgb(128, 0, 0)">&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;li</span> @<span
        style="color: rgb(255, 0, 0)"
        >click</span
      >="<span style="color: rgb(0, 16, 128)">prependText</span> =
      <span style="color: rgb(163, 21, 21)">'prepend-A'</span>"<span
        style="color: rgb(128, 0, 0)"
        >&gt;</span
      >prepend-A<span style="color: rgb(128, 0, 0)">&lt;/li&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;li</span> @<span
        style="color: rgb(255, 0, 0)"
        >click</span
      >="<span style="color: rgb(0, 16, 128)">prependText</span> =
      <span style="color: rgb(163, 21, 21)">'prepend-B'</span>"<span
        style="color: rgb(128, 0, 0)"
        >&gt;</span
      >prepend-B<span style="color: rgb(128, 0, 0)">&lt;/li&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;li</span> @<span
        style="color: rgb(255, 0, 0)"
        >click</span
      >="<span style="color: rgb(0, 16, 128)">prependText</span> =
      <span style="color: rgb(163, 21, 21)">'prepend-C'</span>"<span
        style="color: rgb(128, 0, 0)"
        >&gt;</span
      >prepend-C<span style="color: rgb(128, 0, 0)">&lt;/li&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;/ul&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;/template&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;/yh-search&gt;</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;button</span>
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(255, 0, 0)">style</span>=<span
        style="color: rgb(0, 0, 255)"
        >"position: absolute; right: 20px; top: 20px"</span
      >
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0)"
        >click</span
      >="<span style="color: rgb(0, 16, 128)">shrinkSearch</span>"
    </p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&gt;</span>
    </p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 缩起搜索结果列表</p>
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style="color: rgb(128, 0, 0)">&lt;/button&gt;</span>
    </p>
    <br/>
      <p>
        <span style="color: rgb(175, 0, 219)">export</span>
        <span style="color: rgb(175, 0, 219)">default</span> {
      </p>
      <p>&nbsp; <span style="color: rgb(121, 94, 38)">data</span>() {</p>
      <p>&nbsp; &nbsp; <span style="color: rgb(175, 0, 219)">return</span> {</p>
      <p>
        &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128)">value:</span>
        <span style="color: rgb(163, 21, 21)">""</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128)">total:</span>
        <span style="color: rgb(9, 134, 88)">0</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">config:</span> {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">locationShow:</span>
        <span style="color: rgb(0, 0, 255)">true</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">detailName:</span>
        <span style="color: rgb(163, 21, 21)">"name"</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">detailImg:</span>
        <span style="color: rgb(163, 21, 21)">"files"</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">detailAddress:</span>
        <span style="color: rgb(163, 21, 21)">"address"</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">detailTip:</span>
        <span style="color: rgb(163, 21, 21)">"tip"</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">tipName:</span>
        <span style="color: rgb(163, 21, 21)">"name"</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">listName:</span>
        <span style="color: rgb(163, 21, 21)">"name"</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">listTip:</span>
        <span style="color: rgb(163, 21, 21)">"tip"</span>,
      </p>
      <p>&nbsp; &nbsp; &nbsp; },</p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">prependText:</span>
        <span style="color: rgb(163, 21, 21)">""</span>,
      </p>
      <p>&nbsp; &nbsp; };</p>
      <p>&nbsp; },</p>
      <p>&nbsp; <span style="color: rgb(0, 16, 128)">methods:</span> {</p>
      <p>
        &nbsp; &nbsp; <span style="color: rgb(121, 94, 38)">deletes</span>(<span
          style="color: rgb(0, 16, 128)"
          >e</span
        >){
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 128, 0)">// console.log(this.value)</span>
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(175, 0, 219)">if</span>(<span
          style="color: rgb(0, 0, 255)"
          >this</span
        >.<span style="color: rgb(0, 16, 128)">value</span>==<span
          style="color: rgb(163, 21, 21)"
          >""</span
        >){
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(0, 16, 128)"
          >prependText</span
        >=<span style="color: rgb(163, 21, 21)">""</span>
      </p>
      <p>&nbsp; &nbsp; &nbsp; }</p>
      <p>&nbsp; &nbsp; },</p>
      <p>
        &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">shrinkSearch</span>() {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(0, 16, 128)"
          >$refs</span
        >.<span style="color: rgb(0, 16, 128)">yhSearch</span>.<span
          style="color: rgb(121, 94, 38)"
          >shrinkSearch</span
        >();
      </p>
      <p>&nbsp; &nbsp; },</p>
      <p>
        &nbsp; &nbsp;
        <span style="color: rgb(0, 128, 0)">//定位 data:详情数据</span>
      </p>
      <p>
        &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">location</span>(<span
          style="color: rgb(0, 16, 128)"
          >data</span
        >) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">console</span>.<span
          style="color: rgb(121, 94, 38)"
          >log</span
        >(<span style="color: rgb(0, 16, 128)">data</span>);
      </p>
      <p>&nbsp; &nbsp; },</p>
      <p>&nbsp; &nbsp; <span style="color: rgb(0, 128, 0)">/**</span></p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@description</span
        ><span style="color: rgb(0, 128, 0)">:</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{String}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">row</span
        ><span style="color: rgb(0, 128, 0)">
          点击提示列表的值 Tip: 如果 row==='' 那么则为点击了“搜索”按钮</span
        >
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{Function}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">callBack</span
        ><span style="color: rgb(0, 128, 0)">
          回调函数：返回搜索结果列表,一定要callback</span
        >
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@return</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{*}</span>
      </p>
      <p><span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;*/</span></p>
      <p>
        &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">clickList</span>(<span
          style="color: rgb(0, 16, 128)"
          >param</span
        >, <span style="color: rgb(0, 16, 128)">callBack</span>) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 128, 0)">//模拟接口 根据自己情况调取</span>
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">setTimeout</span>(()
        <span style="color: rgb(0, 0, 255)">=&gt;</span> {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">callBack</span>(<span
          style="color: rgb(0, 16, 128)"
          >param</span
        >);
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; },
        <span style="color: rgb(9, 134, 88)">1000</span>);
      </p>
      <p>&nbsp; &nbsp; },</p>
      <p>&nbsp; &nbsp; <span style="color: rgb(0, 128, 0)">/**</span></p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@description</span
        ><span style="color: rgb(0, 128, 0)">:</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{String/Object}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">row</span
        ><span style="color: rgb(0, 128, 0)">
          点击提示列表的值 Tip: 如果 !row 那么则为点击了“搜索”按钮</span
        >
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{Function}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">callBack</span
        ><span style="color: rgb(0, 128, 0)">
          回调函数：返回搜索结果列表,一定要callback</span
        >
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{Number}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">page</span
        ><span style="color: rgb(0, 128, 0)"> 第几页 &nbsp;一页默认10个</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@return</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{*}</span>
      </p>
      <p><span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;*/</span></p>
      <p>
        &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">clickTip</span>(<span
          style="color: rgb(0, 16, 128)"
          >row</span
        >, <span style="color: rgb(0, 16, 128)">page</span>,
        <span style="color: rgb(0, 16, 128)">callBack</span>) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 128, 0)">// console.log(row, page);</span>
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(175, 0, 219)">if</span> (<span
          style="color: rgb(0, 16, 128)"
          >row</span
        >) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(0, 16, 128)"
          >value</span
        >
        = <span style="color: rgb(0, 16, 128)">row</span>.<span
          style="color: rgb(0, 16, 128)"
          >name</span
        >;
      </p>
      <p>&nbsp; &nbsp; &nbsp; }</p>
      <p><br /></p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 128, 0)">//模拟接口 根据自己情况调取</span>
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">setTimeout</span>(()
        <span style="color: rgb(0, 0, 255)">=&gt;</span> {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">let</span>
        <span style="color: rgb(0, 16, 128)">arr</span> =
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(121, 94, 38)"
          >returnArr</span
        >();
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(0, 16, 128)"
          >total</span
        >
        = <span style="color: rgb(9, 134, 88)">100</span>;
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">callBack</span>(<span
          style="color: rgb(0, 16, 128)"
          >arr</span
        >);
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; },
        <span style="color: rgb(9, 134, 88)">200</span>);
      </p>
      <p>&nbsp; &nbsp; },</p>
      <p>&nbsp; &nbsp; <span style="color: rgb(0, 128, 0)">/**</span></p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@description</span
        ><span style="color: rgb(0, 128, 0)">:</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{String}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">value</span
        ><span style="color: rgb(0, 128, 0)"> input框的值</span>
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@param</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{Function}</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(0, 16, 128)">callBack</span
        ><span style="color: rgb(0, 128, 0)">
          回调函数：返回提示列表,一定要callback</span
        >
      </p>
      <p>
        <span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;* </span
        ><span style="color: rgb(0, 0, 255)">@return</span
        ><span style="color: rgb(0, 128, 0)"> </span
        ><span style="color: rgb(38, 127, 153)">{*}</span>
      </p>
      <p><span style="color: rgb(0, 128, 0)">&nbsp; &nbsp; &nbsp;*/</span></p>
      <p>
        &nbsp; &nbsp; <span style="color: rgb(121, 94, 38)">input</span>(<span
          style="color: rgb(0, 16, 128)"
          >value</span
        >, <span style="color: rgb(0, 16, 128)">callBack</span>) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 128, 0)">// console.log(callBack)</span>
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">setTimeout</span>(()
        <span style="color: rgb(0, 0, 255)">=&gt;</span> {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">let</span>
        <span style="color: rgb(0, 16, 128)">arr</span> =
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(121, 94, 38)"
          >returnArr</span
        >();
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">callBack</span> &amp;&amp;
        <span style="color: rgb(121, 94, 38)">callBack</span>(<span
          style="color: rgb(0, 16, 128)"
          >arr</span
        >);
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; },
        <span style="color: rgb(9, 134, 88)">200</span>);
      </p>
      <p>&nbsp; &nbsp; },</p>
      <p>
        &nbsp; &nbsp; <span style="color: rgb(0, 128, 0)">//返回随机数组</span>
      </p>
      <p>
        &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">returnArr</span>(<span
          style="color: rgb(0, 16, 128)"
          >number</span
        >) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255)">let</span>
        <span style="color: rgb(0, 16, 128)">num</span> =
        <span style="color: rgb(38, 127, 153)">Math</span>.<span
          style="color: rgb(121, 94, 38)"
          >floor</span
        >(<span style="color: rgb(38, 127, 153)">Math</span>.<span
          style="color: rgb(121, 94, 38)"
          >random</span
        >() * <span style="color: rgb(9, 134, 88)">10</span> +
        <span style="color: rgb(9, 134, 88)">1</span>);
      </p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(175, 0, 219)">if</span> (<span
          style="color: rgb(0, 16, 128)"
          >number</span
        >) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">num</span> =
        <span style="color: rgb(0, 16, 128)">number</span>;
      </p>
      <p>&nbsp; &nbsp; &nbsp; }</p>
      <p>
        &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255)">let</span>
        <span style="color: rgb(0, 16, 128)">arr</span> = [];
      </p>
      <p><br /></p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(175, 0, 219)">for</span> (<span
          style="color: rgb(0, 0, 255)"
          >let</span
        >
        <span style="color: rgb(0, 16, 128)">i</span> =
        <span style="color: rgb(9, 134, 88)">0</span>;
        <span style="color: rgb(0, 16, 128)">i</span> &lt;
        <span style="color: rgb(0, 16, 128)">num</span>;
        <span style="color: rgb(0, 16, 128)">i</span>++) {
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 0, 255)">let</span>
        <span style="color: rgb(0, 16, 128)">numFlag</span> =
        <span style="color: rgb(38, 127, 153)">Math</span>.<span
          style="color: rgb(121, 94, 38)"
          >floor</span
        >(<span style="color: rgb(38, 127, 153)">Math</span>.<span
          style="color: rgb(121, 94, 38)"
          >random</span
        >() * <span style="color: rgb(9, 134, 88)">2</span> +
        <span style="color: rgb(9, 134, 88)">1</span>);
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">arr</span>.<span
          style="color: rgb(121, 94, 38)"
          >push</span
        >({
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">name:</span>
        <span style="color: rgb(0, 0, 255)">this</span>.<span
          style="color: rgb(0, 16, 128)"
          >value</span
        >
        + <span style="color: rgb(0, 16, 128)">i</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">url:</span>
        <span style="color: rgb(0, 16, 128)">numFlag</span> ==
        <span style="color: rgb(9, 134, 88)">1</span> ?
        <span style="color: rgb(121, 94, 38)">require</span>(<span
          style="color: rgb(163, 21, 21)"
          >"../../assets/img/logoimg.png"</span
        >) : <span style="color: rgb(163, 21, 21)">""</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">tip:</span>
        <span style="color: rgb(163, 21, 21)"
          >"提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提"</span
        >,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">files:</span>
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(0, 16, 128)">numFlag</span> ==
        <span style="color: rgb(9, 134, 88)">1</span>
      </p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ? [</p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">require</span>(<span
          style="color: rgb(163, 21, 21)"
          >"../../assets/img/logoimg.png"</span
        >),
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(121, 94, 38)">require</span>(<span
          style="color: rgb(163, 21, 21)"
          >"../../assets/dtbg.png"</span
        >),
      </p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : [],</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; });</p>
      <p>&nbsp; &nbsp; &nbsp; }</p>
      <p>
        &nbsp; &nbsp; &nbsp;
        <span style="color: rgb(175, 0, 219)">return</span>
        <span style="color: rgb(0, 16, 128)">arr</span>;
      </p>
      <p>&nbsp; &nbsp; },</p>
      <p>&nbsp; },</p>
      <p>};</p>

      <p><span style="color: rgb(128, 0, 0);">.flex-center</span> {</p><p>&nbsp; <span style="color: rgb(255, 0, 0);">display</span>: <span style="color: rgb(4, 81, 165);">flex</span>;</p><p>&nbsp; <span style="color: rgb(255, 0, 0);">align-items</span>: <span style="color: rgb(4, 81, 165);">center</span>;</p><p>&nbsp; <span style="color: rgb(255, 0, 0);">justify-content</span>: <span style="color: rgb(4, 81, 165);">center</span>;</p><p>}</p><p><span style="color: rgb(128, 0, 0);">.tip-ups</span> {</p><p>&nbsp; <span style="color: rgb(255, 0, 0);">display</span>: <span style="color: rgb(4, 81, 165);">flex</span>;</p><p>&nbsp; <span style="color: rgb(128, 0, 0);">li</span> {</p><p>&nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">cursor</span>: <span style="color: rgb(4, 81, 165);">pointer</span>;</p><p>&nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">height</span>: <span style="color: rgb(9, 134, 88);">40px</span>;</p><p>&nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">line-height</span>: <span style="color: rgb(9, 134, 88);">40px</span>;</p><p>&nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">width</span>: <span style="color: rgb(9, 134, 88);">33.33%</span>;</p><p>&nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">text-align</span>: <span style="color: rgb(4, 81, 165);">center</span>;</p><p>&nbsp; &nbsp; <span style="color: rgb(128, 0, 0);">&amp;:hover</span> {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">background</span>: <span style="color: rgb(4, 81, 165);">#cecece</span>;</p><p>&nbsp; &nbsp; }</p><p>&nbsp; }</p><p>}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>