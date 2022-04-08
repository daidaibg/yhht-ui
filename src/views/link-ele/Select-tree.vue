<!--
 * @Author: daidai
 * @Date: 2021-09-30 09:10:15
 * @LastEditors: daidai
 * @LastEditTime: 2022-01-17 11:04:17
 * @FilePath: \yhht-ui\src\views\link-ele\Select-tree.vue
-->
<template>
  <div class="">
    <h2>树形下拉框</h2>
    <p>
      基于element二次封装，树形下拉框。注意要
      <a href="#/components/installLinkEle">引入和使用</a>
    </p>
    <h3>例子</h3>
    <code-wrap>
      <yh-select-tree
        :props="props"
        :options="options"
        :value="valueId"
        @select-change="select"
      />
      <div slot="code">
        <p>
          &nbsp;<span style="color: rgb(128, 0, 0)">&lt;yh-select-tree</span>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;:<span style="color: rgb(255, 0, 0)"
            >props</span
          >="<span style="color: rgb(0, 16, 128)">props</span>"
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;:<span style="color: rgb(255, 0, 0)"
            >options</span
          >="<span style="color: rgb(0, 16, 128)">options</span>"
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;:<span style="color: rgb(255, 0, 0)"
            >value</span
          >="<span style="color: rgb(0, 16, 128)">valueId</span>"
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;@<span style="color: rgb(255, 0, 0)"
            >select-change</span
          >="<span style="color: rgb(0, 16, 128)">select</span>"
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;:<span style="color: rgb(255, 0, 0)"
            >default-expanded-keys</span
          >="[<span style="color: rgb(0, 16, 128)">valueId</span>]"
        </p>
        <p>&nbsp;&nbsp;/<span style="color: rgb(128, 0, 0)">&gt;</span></p>
        <br />
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
          >&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >valueId:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">3</span>,&nbsp;<span
            style="color: rgb(0, 128, 0)"
            >//&nbsp;初始ID（可选）</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >props:</span
          >&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >value:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"id"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"label"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >children:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"children"</span>,
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >options:</span
          >&nbsp;[],
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;};</p>
        <p>&nbsp;&nbsp;},</p>
        <p>
          &nbsp;&nbsp;<span style="color: rgb(121, 94, 38)">mounted</span
          >()&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255)">this</span
          >.<span style="color: rgb(0, 16, 128)">options</span>&nbsp;=&nbsp;[
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"一级&nbsp;1"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"aa"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >children:</span
          >&nbsp;[
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"二级&nbsp;1-1"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">2</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >children:</span
          >&nbsp;[
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"三级&nbsp;1-1-1"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">3</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"一级&nbsp;2"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">4</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >children:</span
          >&nbsp;[
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"二级&nbsp;2-1"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">5</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >children:</span
          >&nbsp;[
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"三级&nbsp;2-1-1"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">6</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"二级&nbsp;2-2"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">7</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >children:</span
          >&nbsp;[
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >id:</span
          >&nbsp;<span style="color: rgb(9, 134, 88)">8</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >label:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"三级&nbsp;2-2-1"</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
        <p>&nbsp;&nbsp;},</p>
        <p>
          &nbsp;&nbsp;<span style="color: rgb(0, 16, 128)">methods:</span
          >&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 128, 0)"
            >//&nbsp;发生变化</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(121, 94, 38)"
            >select</span
          >(<span style="color: rgb(0, 16, 128)">value</span>)&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">valueId</span
          >&nbsp;=&nbsp;<span style="color: rgb(0, 16, 128)">value</span>.<span
            style="color: rgb(0, 16, 128)"
            >id</span
          >;
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>&nbsp;&nbsp;},</p>
        <p>};</p>
      </div>
    </code-wrap>
    <h3>参数</h3>
    <table class="tables">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>props</td>
        <td>配置选项，具体看下表</td>
        <td>object</td>
        <td>——</td>
      </tr>
      <tr>
        <td>options</td>
        <td>树形结构数据</td>
        <td>Array</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>value</td>
        <td>绑定值</td>
        <td>boolean / string / number</td>
        <td>--</td>
      </tr>
      <tr>
        <td>size</td>
        <td>输入框尺寸，可选 medium/small/mini</td>
        <td>string</td>
        <td>--</td>
      </tr>
      <tr>
        <td>clearable</td>
        <td>是否可以清空选项</td>
        <td>boolean</td>
        <td>true</td>
      </tr>
      <td>accordion</td>
      <td>是否每次只打开一个同级树节点展开</td>
      <td>boolean</td>
      <td>false</td>
      <tr>
        <td>placeholder</td>
        <td>占位符</td>
        <td>string</td>
        <td>请选择</td>
      </tr>
      <tr>
        <td>defaultExpandedKeys</td>
        <td>默认展开的节点的 key 的数组</td>
        <td>array</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>highlightCurrent</td>
        <td>是否高亮当前选中节点，默认值是 true</td>
        <td>boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>defaultExpandAll</td>
        <td>是否默认展开所有节点</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>expandOnClickNode</td>
        <td>是否在点击节点的时候展开或者收缩节点，</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
    </table>
    <h2>Events</h2>
    <table class="tables">
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>参数</th>
        <th>备注</th>
      </tr>
      <tr>
        <td>select-change</td>
        <td>选择发生变化</td>
        <td>一个参数Object,根据传入的props返回一个对象，选择的值</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueId: -1, // 初始ID（可选）
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
</script>
<style lang='scss' scoped>
</style>