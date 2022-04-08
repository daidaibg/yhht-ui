<!--
 * @Author: daidai
 * @Date: 2021-09-28 14:18:46
 * @LastEditors: daidai
 * @LastEditTime: 2022-01-17 09:59:31
 * @FilePath: \yhht-ui\src\views\link-ele\Table-ele.vue
-->
<template>
  <div class="table_ele">
    <h3>表格加分页</h3>
    <p>把element的分页与表格结合在一起使用</p>

    <h3>例子</h3>
    <code-wrap>
      <yh-table-pag
        :data="tableData"
        @getData="getData"
        :total="total"
        size="small"
        :loading="loading"
        @row-click="rowClick"
        max-height="300px"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </yh-table-pag>
      <div slot="code">
        <p>
          &nbsp;&nbsp;<span style="color: rgb(128, 0, 0)">&lt;yh-table-pag</span
          >&nbsp;:<span style="color: rgb(255, 0, 0)">data</span>="<span
            style="color: rgb(0, 16, 128)"
            >tableData</span
          >"&nbsp;@<span style="color: rgb(255, 0, 0)">getData</span>="<span
            style="color: rgb(0, 16, 128)"
            >getData</span
          >"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span
            style="color: rgb(255, 0, 0)"
            >total</span
          >="<span style="color: rgb(0, 16, 128)">total</span
          >"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(255, 0, 0)"
            >size</span
          >=<span style="color: rgb(0, 0, 255)">"small"</span
          ><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(255, 0, 0)"
            >loading</span
          >="<span style="color: rgb(0, 16, 128)">loading</span
          >"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(255, 0, 0)"
            >max-height</span
          >=<span style="color: rgb(0, 0, 255)">"300px"</span
          ><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(128, 0, 0)"
            >&gt;</span
          >
        </p>
        <p>
          <span style="color: rgb(175, 0, 219)"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          ><span style="color: rgb(128, 0, 0)">&lt;el-table-column</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">prop</span>=<span
            style="color: rgb(0, 0, 255)"
            >"date"</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">label</span>=<span
            style="color: rgb(0, 0, 255)"
            >"日期"</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">width</span>=<span
            style="color: rgb(0, 0, 255)"
            >"180"</span
          ><span style="color: rgb(128, 0, 0)">&gt;</span>&nbsp;<span
            style="color: rgb(128, 0, 0)"
            >&lt;/el-table-column&gt;</span
          >
        </p>
        <p>
          <span style="color: rgb(175, 0, 219)"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          ><span style="color: rgb(128, 0, 0)">&lt;el-table-column</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">prop</span>=<span
            style="color: rgb(0, 0, 255)"
            >"name"</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">label</span>=<span
            style="color: rgb(0, 0, 255)"
            >"姓名"</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">width</span>=<span
            style="color: rgb(0, 0, 255)"
            >"180"</span
          ><span style="color: rgb(128, 0, 0)">&gt;</span>&nbsp;<span
            style="color: rgb(128, 0, 0)"
            >&lt;/el-table-column&gt;</span
          >
        </p>
        <p>
          <span style="color: rgb(175, 0, 219)"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          ><span style="color: rgb(128, 0, 0)">&lt;el-table-column</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">prop</span>=<span
            style="color: rgb(0, 0, 255)"
            >"address"</span
          >&nbsp;<span style="color: rgb(255, 0, 0)">label</span>=<span
            style="color: rgb(0, 0, 255)"
            >"地址"</span
          ><span style="color: rgb(128, 0, 0)">&gt;</span>&nbsp;<span
            style="color: rgb(128, 0, 0)"
            >&lt;/el-table-column&gt;</span
          >
        </p>
        <p>
          <span style="color: rgb(175, 0, 219)">&nbsp;&nbsp;&nbsp;&nbsp;</span
          ><span style="color: rgb(128, 0, 0)">&lt;/yh-table-pag&gt;</span>
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
          >&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >tableData:</span
          >&nbsp;[],
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >total:</span
          ><span style="color: rgb(9, 134, 88)">0</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >loading:</span
          ><span style="color: rgb(0, 0, 255)">false</span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;};</p>
        <p>&nbsp;&nbsp;},</p>
        <p>
          &nbsp;&nbsp;<span style="color: rgb(0, 16, 128)">methods:</span
          >&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(121, 94, 38)"
            >getData</span
          >(<span style="color: rgb(0, 16, 128)">pagData</span>)&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">loading</span>=<span
            style="color: rgb(0, 0, 255)"
            >true</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">pagData</span>=<span
            style="color: rgb(0, 16, 128)"
            >pagData</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 128, 0)"
            >//此处写接口</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(121, 94, 38)"
            >setTimeout</span
          >(()&nbsp;<span style="color: rgb(0, 0, 255)">=&gt;</span>&nbsp;{
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">loading</span>=<span
            style="color: rgb(0, 0, 255)"
            >false</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">total</span>&nbsp;=&nbsp;<span
            style="color: rgb(9, 134, 88)"
            >100</span
          >
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">tableData</span>=<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(121, 94, 38)">randomData</span>()
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;<span
            style="color: rgb(9, 134, 88)"
            >500</span
          >);
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;},</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(121, 94, 38)"
            >randomData</span
          >(){
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 0, 255)"
            >let</span
          >&nbsp;<span style="color: rgb(0, 16, 128)">arr</span>=&nbsp;[]
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >console</span
          >.<span style="color: rgb(121, 94, 38)">log</span>(<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">pagData</span>.<span
            style="color: rgb(0, 16, 128)"
            >pageSize</span
          >)
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(175, 0, 219)"
            >for</span
          >(<span style="color: rgb(0, 0, 255)">var</span>&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >i</span
          >=<span style="color: rgb(9, 134, 88)">0</span>;<span
            style="color: rgb(0, 16, 128)"
            >i</span
          >&lt;<span style="color: rgb(0, 0, 255)">this</span>.<span
            style="color: rgb(0, 16, 128)"
            >pagData</span
          >.<span style="color: rgb(0, 16, 128)">pageSize</span>;<span
            style="color: rgb(0, 16, 128)"
            >i</span
          >++){
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >arr</span
          >.<span style="color: rgb(121, 94, 38)">push</span>({
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >date:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"2016-05-0"</span>+<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">pagData</span>.<span
            style="color: rgb(0, 16, 128)"
            >currentPage</span
          >+<span style="color: rgb(0, 16, 128)">i</span>&nbsp;,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >name:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)">"王小虎"</span>+<span
            style="color: rgb(0, 0, 255)"
            >this</span
          >.<span style="color: rgb(0, 16, 128)">pagData</span>.<span
            style="color: rgb(0, 16, 128)"
            >currentPage</span
          >+<span style="color: rgb(0, 16, 128)">i</span>&nbsp;,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >address:</span
          >&nbsp;<span style="color: rgb(163, 21, 21)"
            >`上海市普陀区金沙江路&nbsp;151</span
          ><span style="color: rgb(0, 0, 255)">${</span
          ><span style="color: rgb(0, 16, 128)">i</span
          ><span style="color: rgb(0, 0, 255)">}</span
          ><span style="color: rgb(163, 21, 21)">&nbsp;弄`</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(0, 16, 128)"
            >console</span
          >.<span style="color: rgb(121, 94, 38)">log</span>(<span
            style="color: rgb(0, 16, 128)"
            >arr</span
          >)
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="color: rgb(175, 0, 219)"
            >return</span
          >&nbsp;<span style="color: rgb(0, 16, 128)">arr</span>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;},</p>
        <p>};</p>
      </div>
    </code-wrap>

    <h3>参数</h3>
    <p>
      以下参数是在原有基础上新增, element原有参数大部分可使用<a
        href="https://element.eleme.cn/#/zh-CN/component/table#table-attributes"
        target="view_frame"
        >请移步</a
      >
    </p>
    <table class="tables">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>data</td>
        <td>显示的数据</td>
        <td>array</td>
        <td>——</td>
      </tr>
      <tr>
        <td>inPageGetData</td>
        <td>页面加载完毕是否调用getData()</td>
        <td>boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>layout</td>
        <td>组件布局，子组件名用逗号分隔()</td>
        <td>String</td>
        <td>
          total,sizes, prev, pager, next,jumper
          <a
            href="https://element.eleme.cn/#/zh-CN/component/pagination#attributes"
            target="view_frame"
            >详情</a
          >
        </td>
      </tr>
      <tr>
        <td>currentPage</td>
        <td>当前页数（非必填，如果传进去就用传进去页数）</td>
        <td>Number</td>
        <td>1</td>
      </tr>
      <tr>
        <td>pageSize</td>
        <td>每页多少（非必填）</td>
        <td>Number</td>
        <td>10</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>加载中</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <td>loading-spinner</td>
      <td>自定义加载图标类名</td>
      <td>string</td>
      <td>el-icon-loading</td>
      <tr>
        <td>loadingBackground</td>
        <td>遮罩背景色</td>
        <td>string</td>
        <td>--</td>
      </tr>
      <tr>
        <td>loadingText</td>
        <td>显示在加载图标下方的加载文案</td>
        <td>string</td>
        <td>拼命加载中...</td>
      </tr>
      <tr>
        <td>loadingCustomClass</td>
        <td>Loading 的自定义类名</td>
        <td>string</td>
        <td>--</td>
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
        <td>getData</td>
        <td>
          分页发生变化会触发,inPageGetData为true的时候页面加载完毕(mounted生命周)也会触发
        </td>
        <td>(pagData 每页数量与页码)</td>
        <td>{pageSize: 10, currentPage: 1,}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import CodeWrap from "../../components/Code-wrap.vue";
export default {
  components: { CodeWrap },
  data() {
    return {
      tableData: [],
      total: 0,
      loading: false,
    };
  },
  methods: {
    getData(pagData) {
      this.loading = true;
      this.pagData = pagData;
      //此处写接口
      setTimeout(() => {
        this.loading = false;
        this.total = 100;
        this.tableData = this.randomData();
      }, 500);
    },
    randomData() {
      let arr = [];
      console.log(this.pagData.pageSize);
      for (var i = 0; i < this.pagData.pageSize; i++) {
        arr.push({
          date: "2016-05-0" + this.pagData.currentPage + i,
          name: "王小虎" + this.pagData.currentPage + i,
          address: `上海市普陀区金沙江路 151${i} 弄`,
        });
      }
      console.log(arr);
      return arr;
    },
    rowClick(){
      console.log(1)
    }
  },
};
</script>
<style lang='' scoped>
</style>