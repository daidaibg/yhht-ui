<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:27:02
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-21 17:00:28
 * @FilePath: \yhht-ui\src\views\com\Search.vue
-->
<template>
  <div class="search">
    <h2 id="icon-tu-biao">地图搜索框</h2>
    <h3 id="li-zi">例子</h3>
    <p>
      因在地图上展示所以背景色一般为地图,组件本身为定位元素,包裹它的元素要为定位元素。
    </p>
    <div class="warning">
      <p>长时间未更新，请谨慎使用</p>
    </div>

    <code-wrap>
      <div class="search-wrap">
        <yh-search
          v-model="value"
          :listTotal="total"
          :config="config"
          ref="yhSearch"
          @input="input"
          @clickTip="clickTip"
          @clickList="clickList"
          @location="location"
          @delete="deletes"
        >
          <!-- <div slot="yh-search-search">搜索</div> -->
          <!-- <div  slot-scope="scoped" slot="tip-list-slot">
                    {{scoped.item.name}}
                </div> -->

          <!-- <div slot="detail-slot" slot-scope="scoped" style="background:red;color:#FFF;padding:10px;">
            {{scoped.detailData.name}}
        </div> -->
          <div
            slot="prepend"
            style="color: #cecece; height: 100%"
            class="flex-center"
          >
            {{ prependText }}
          </div>
          <template slot="tip-up">
            <ul class="tip-ups">
              <li @click="prependText = 'prepend-A'">prepend-A</li>
              <li @click="prependText = 'prepend-B'">prepend-B</li>
              <li @click="prependText = 'prepend-C'">prepend-C</li>
            </ul>
          </template>
        </yh-search>
        <button
          style="position: absolute; right: 20px; top: 20px"
          @click="shrinkSearch"
        >
          缩起搜索结果列表
        </button>
      </div>
      <SearchCode slot="code" />
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
        <td>value / v-model</td>
        <td>绑定值</td>
        <td>string / number</td>
        <td>——</td>
      </tr>
      <tr>
        <td>listTotal</td>
        <td>搜索列表总数量</td>
        <td>string / number</td>
        <td>——</td>
      </tr>
      <tr>
        <td>suffixStyle</td>
        <td>搜索按钮样式</td>
        <td>Object</td>
        <td>也可以使用slot</td>
      </tr>
      <tr>
        <td>maxHeight</td>
        <td>搜索列表高度</td>
        <td>String</td>
        <td>50vh</td>
      </tr>
      <tr>
        <td>searchStyle</td>
        <td>input样式</td>
        <td>Object</td>
        <td>{ position: "absolute", top: "20px", left: "20px", }</td>
      </tr>

      <tr>
        <td>config</td>
        <td>配置选项，具体看下表</td>
        <td>Object</td>
        <td></td>
      </tr>
    </table>
    <h3>Events</h3>
    <table class="tables">
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>参数</th>
        <th>备注</th>
      </tr>
      <tr>
        <td>input</td>
        <td>在 Input 值改变时触发</td>
        <td>(param: String,callBack:Function)</td>
        <td>callBack(), 回调函数,传参：提示列表Array</td>
      </tr>
      <tr>
        <td>delete</td>
        <td>键盘回车删除</td>
        <td>Event</td>
        <td></td>
      </tr>
      <tr>
        <td>clickTip</td>
        <td>点击提示列表事件</td>
        <td>(param: Object,page,callBack:Function)</td>
        <td>
          param:点击的提示列表数据,page:第几页,callBack():
          回调函数,传参：搜索列表Array
        </td>
      </tr>
      <tr>
        <td>clickList</td>
        <td>点击搜索列表事件</td>
        <td>(param: Object,callBack:Function)</td>
        <td>
          Object:点击搜索列表数据,callBack(): 回调函数,传参:详情信息Object
        </td>
      </tr>
      <tr>
        <td>location</td>
        <td>详情页定位事件</td>
        <td>(data: Object)</td>
        <td>Object:详情数据</td>
      </tr>
    </table>
    <h3>ref</h3>
    <table class="tables">
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>使用</th>
        <th>备注</th>
      </tr>
      <tr>
        <td>shrinkSearch</td>
        <td>缩起搜索列表</td>
        <td>this.$refs.yhSearch.shrinkSearch()</td>
        <td>一般地图移动、点击地图或点击非搜索框区域时 调用此方法</td>
      </tr>
      <tr>
        <td>enters</td>
        <td>搜索暴漏方法</td>
        <td>this.$refs.yhSearch.enters()</td>
        <td>使用自定义搜索时(yh-search-search)，调用此方法</td>
      </tr>
    </table>
    <h3>config配置</h3>
    <table class="tables">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认</th>
      </tr>
      <tr>
        <td>inputWidth</td>
        <td>input宽度</td>
        <td>String</td>
        <td>350px</td>
      </tr>
      <tr>
        <td>tipName</td>
        <td>提示列表显示字段</td>
        <td>String</td>
        <td>name</td>
      </tr>
      <tr>
        <td>listName</td>
        <td>搜索列表显示字段</td>
        <td>String</td>
        <td>name</td>
      </tr>
      <tr>
        <td>listTip</td>
        <td>搜索列表提示字段</td>
        <td>String</td>
        <td>tip</td>
      </tr>
      <tr>
        <td>locationText</td>
        <td>详情页面，定位显示文字</td>
        <td>String</td>
        <td>定位</td>
      </tr>
      <tr>
        <td>locationShow</td>
        <td>详情页面是否显示右侧定位按钮</td>
        <td>Boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>detailName</td>
        <td>详情页面名字显示字段</td>
        <td>String</td>
        <td>name</td>
      </tr>
      <tr>
        <td>detailImg</td>
        <td>详情页面图片列表显示字段（这个字段要为Array,自己需要处理）</td>
        <td>String</td>
        <td>files</td>
      </tr>
      <tr>
        <td>detailAddress</td>
        <td>详情页面地址显示字段( 可以不填)</td>
        <td>String</td>
        <td>address</td>
      </tr>
      <tr>
        <td>detailTip</td>
        <td>详情页面提示字段</td>
        <td>String</td>
        <td>tip</td>
      </tr>
    </table>
    <h3>slot</h3>
    <p style="color: #e6a23c">以下都注意要自己修饰</p>
    <table class="tables">
      <tr>
        <th>name</th>
        <th>说明</th>
        <th>使用</th>
      </tr>
      <tr>
        <td></td>
        <td>可以直接使用slot，输入提示，搜索列表，详情列表</td>
        <td></td>
      </tr>
      <tr>
        <td>prepend</td>
        <td>输入框前置内容</td>
        <td></td>
      </tr>
      <tr>
        <td>tip-up</td>
        <td>输入提示上方内容</td>
        <td></td>
      </tr>
      <tr>
        <td>yh-search-search</td>
        <td>搜索按钮</td>
        <td>{{ slot }}</td>
      </tr>
      <tr>
        <td>tip-list-slot</td>
        <td>提示列表 每行,参数每行数据</td>
        <td>{{ slotTip }}</td>
      </tr>
      <tr>
        <td>detail-slot</td>
        <td>提示列表 每行</td>
        <td>{{ slotDetail }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import CodeWrap from "../../components/Code-wrap.vue";
import SearchCode from "./Search-code.vue";
export default {
  data() {
    return {
      value: "",
      total: 0,
      config: {
        locationShow: true,
        detailName: "name",
        detailImg: "files",
        detailAddress: "address",
        detailTip: "tip",
        tipName: "name",
        listName: "name",
        listTip: "tip",
      },
      prependText: "",
      slot: `<div slot="yh-search-search"></div>`,
      slotTip: ` <div  slot-scope="scoped" slot="tip-list-slot">
                         {{scoped.data.name}}
                </div> `,
      slotDetail: `<div slot="detail-slot" slot-scope="scoped" style="background:red;color:#FFF;padding:10px;">
          {{scoped.data.name}}
        </div> `,
    };
  },
  components: { SearchCode, CodeWrap },
  computed: {
    baseUrl() {
      let url = window.location.href.split("#");
      return url[0] + "#" + url[1];
    },
  },
  methods: {
    deletes(e) {
      // console.log(this.value)
      if (this.value == "") {
        this.prependText = "";
      }
    },
    shrinkSearch() {
      this.$refs.yhSearch.shrinkSearch();
    },
    //定位 data:详情数据
    location(data) {
      console.log(data);
    },
    /**
     * @description:
     * @param {String} row 点击提示列表的值 Tip: 如果 row==='' 那么则为点击了“搜索”按钮
     * @param {Function} callBack 回调函数：返回搜索结果列表,一定要callback
     * @return {*}
     */
    clickList(param, callBack) {
      //模拟接口 根据自己情况调取
      setTimeout(() => {
        callBack(param);
      }, 1000);
    },
    /**
     * @description:
     * @param {String/Object} row 点击提示列表的值 Tip: 如果 !row 那么则为点击了“搜索”按钮
     * @param {Function} callBack 回调函数：返回搜索结果列表,一定要callback
     * @param {Number} page 第几页  一页默认10个
     * @return {*}
     */
    clickTip(row, page, callBack) {
      // console.log(row, page);
      if (row) {
        this.value = row.name;
      }

      //模拟接口 根据自己情况调取
      setTimeout(() => {
        let arr = this.returnArr();
        this.total = 100;
        callBack(arr);
      }, 200);
    },
    /**
     * @description:
     * @param {String} value input框的值
     * @param {Function} callBack 回调函数：返回提示列表,一定要callback
     * @return {*}
     */
    input(value, callBack) {
      // console.log(callBack)
      setTimeout(() => {
        let arr = this.returnArr();
        callBack && callBack(arr);
      }, 200);
    },
    //返回随机数组
    returnArr(number) {
      let num = Math.floor(Math.random() * 10 + 1);
      if (number) {
        num = number;
      }
      let arr = [];

      for (let i = 0; i < num; i++) {
        let numFlag = Math.floor(Math.random() * 2 + 1);
        arr.push({
          name: this.value + i,
          url: numFlag == 1 ? require("../../assets/img/logoimg.png") : "",
          tip: "提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提",
          files:
            numFlag == 1
              ? [
                  require("../../assets/img/logoimg.png"),
                  require("../../assets/dtbg.png"),
                ]
              : [],
        });
      }
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-wrap {
  background: url("../../assets/dtbg.png");
  height: 600px;
  position: relative;
}
.tip-ups {
  display: flex;
  li {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    width: 33.33%;
    text-align: center;
    &:hover {
      background: #cecece;
    }
  }
}
</style>