<!--
 * @Author: daidai
 * @Date: 2022-02-10 09:58:38
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 09:06:37
 * @FilePath: \yhht-ui\src\views\com-js\Utils.vue
-->
<template>
  <div class="utils-wrap">
    <ul class="utils-list">
      <li
        v-for="item in utilsList"
        :key="item.id"
        @click="jump(item)"
        :class="{ activelist: active == item.id }"
      >
        {{ item.name }}
      </li>
    </ul>
    <div id="uuid" class="anchor-dom">
      <h3>{{ utilsList[0].name }}</h3>
      <p>引入与使用</p>
      <code-light
        text="import { getUUID } from 'yhht-ui/src/util'; 
let uuid = getUUID()
console.log(uuid)"
        wrapClass="codes"
        codeType="javascript"
      ></code-light>
    </div>
    <div id="drag" class="anchor-dom">
      <h3>{{ utilsList[1].name }}</h3>
      <p>引入与使用</p>
      <div class="tipdefault">
        <p>
          支持手机端
          <span class="codelit">ontouchstart() </span> 事件
        </p>
      </div>
      <div class="warning">
        <p>
          本身必须为定位元素
          <span class="codelit">position: absolute</span> ，根据
          <span class="codelit">position: relative;</span> 来定位的
        </p>
      </div>

      <code-wrap :codeText="codetext.drag" style="min-width: 335px">
        <!-- 外层元素 -->
        <div
          style="width: 100%; height: 150px; position: relative"
          ref="dragWrapDom"
        >
          <!-- 拖动自己本身 -->
          <div
            @mousedown.prevent="dragItself"
            @touchstart.prevent="dragItself"
            ref="drag_itself"
            style="position: absolute; top: 10px"
            class="drag_itself"
          >
            拖动本身
            <span style="font-size: 12px"></span>
          </div>
          <!-- 拖动父级或其他元素都可以 -->
          <div
            ref="drag_wrap"
            style="
              position: absolute;
              padding: 10px;
              border: solid 1px rgb(192 187 187);
              border-radius: 8px;
              top: 80px;
            "
          >
            <div
              @mousedown.prevent="dragWrap"
              @touchstart.prevent="dragWrap"
              class="drag_itself"
            >
              拖动其他元素
              <span style="font-size: 12px">(控制最大x,y)</span>
            </div>
          </div>
        </div>
      </code-wrap>
      <h3>参数是一个对象,以下是对象的值</h3>
      <TableParam :data="dragData" />
    </div>

    <!-- 判断数据类型  start -->
    <div id="isDataTyp" class="anchor-dom">
      <h3>{{ utilsList[2].name }}</h3>
      <p>判断数据类型，是否是字符串、数组、对象等</p>
      <code-light
        :text="codetext.dataType"
        wrapClass="codes"
        codeType="javascript"
      ></code-light>
    </div>
    <!-- 颜色转换  start -->
    <div id="colorFormat" class="anchor-dom">
      <h3>{{ utilsList[3].name }}</h3>
      <ColorsFormat />
    </div>
  </div>
</template>

<script>
import { getUUID, yhDrag } from "yhht-ui/src/util";
import {
  isString,
  isObject,
  isHtmlElement,
  isFunction,
  isUndefined,
  isDefined,
  isArray,
} from "yhht-ui/src/util";
import utilsCode from "./utils-code";
import ColorsFormat from "./Colors.vue";
export default {
  data() {
    return {
      utilsList: [
        {
          name: "获取UUID",
          id: "uuid",
        },
        {
          name: "拖动元素",
          id: "drag",
        },
        {
          name: "判断数据类型",
          id: "isDataTyp",
        },
        {
          name: "颜色转换",
          id: "colorFormat",
        },
      ],
      dragData: [
        {
          key: "e",
          explain: "event",
          type: "event",
          opt: "--",
          def: "必填",
        },
        {
          key: "dom",
          explain: "移动范围",
          type: "Array",
          opt: "--",
          def: "必填",
        },
        {
          key: "rang",
          explain: "移动范围(优先级比rangDom高)",
          type: "Dom",
          opt: "--",
          def: "[minX,maxX, minY,maxY]",
        },
        {
          key: "rangDom",
          explain:
            "定位父级dom元素，如果填写了会使用此元素拖动范围(拖动范围不会超出此范围)",
          type: "Dom",
          opt: "--",
          def: "--",
        },
      ],
      active: "",
      codetext: utilsCode,
      srcollDom: null,
      timer: null,
    };
  },
  components: { ColorsFormat },
  created() {
    let uuid = getUUID();
    console.log(uuid);
    // 以下皆是返回 true || false
    let stringFlag = isString("字符串"); //ture   是否是字符串
    let objectFlag = isObject({
      a: 1,
    }); //ture   是否是对象
    let arrayFlag = isArray([]); //ture   是否是数组
    let elementFlag = isHtmlElement(document.querySelector("p")); //ture   是否是dom元素
    let functionFlag = isFunction(function name(params) {}); //ture   是否是函数
    let undefinedFlag = isUndefined(); //ture   是否是字符串
    let definedFlag = isDefined("常量"); //ture   是否是常量

    // console.log(
    //   stringFlag,
    //   objectFlag,
    //   elementFlag,
    //   functionFlag,
    //   undefinedFlag,
    //   definedFlag,
    //   arrayFlag
    // );
  },

  mounted() {
    this.$nextTick(function () {
      document
        .querySelector(".el-scrollbar__wrap")
        .addEventListener("scroll", this.onScroll);
    });
    let itemID = this.$route.query.itemID;
    if (itemID) {
      this.active = itemID;
      this.utilsList.forEach((item) => {
        if (item.id == itemID) {
          this.jump(item);
        }
      });
    } else {
      this.active = this.utilsList[0].id;
    }
  },
  beforeDestroy() {
    let srcollDom = document.querySelector(".el-scrollbar__wrap");
    srcollDom && srcollDom.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    active(newval, oldval) {
      this.$router
        .push({
          path: "/components/utils",
          query: {
            itemID: newval,
          },
        })
        .catch((err) => {});
    },
  },
  methods: {
    dragItself(e) {
      return yhDrag({ e: e, dom: this.$refs.drag_itself });
    },
    dragWrap(e) {
      const wrapDom = this.$refs.dragWrapDom;
      const dragDom = this.$refs.drag_wrap;
      let maxX = wrapDom.offsetWidth - dragDom.offsetWidth;
      let maxY = wrapDom.offsetHeight - dragDom.offsetHeight;
      let range = [0, maxX, 0, maxY]; //[minX,maxX, minY,maxY]
      return yhDrag({ e: e, dom: dragDom, range });
    },
    jump(item) {
      const _this = this;
      this.active = item.id;
      let jump = document.querySelector("#" + item.id);
      let srcollDom = document.querySelector(".el-scrollbar__wrap");
      this.srcollDom = srcollDom;
      let total = jump.offsetTop;
      let distance = srcollDom.scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      clearTimeout(this.timer);
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          srcollDom.scrollTop = distance;
          //   srcollDom.documentElement.scrollTop = distance;
          _this.timer = setTimeout(smoothDown, 10);
        } else {
          srcollDom.scrollTop = total;
          //   srcollDom.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          srcollDom.scrollTop = distance;
          //   srcollDom.documentElement.scrollTop = distance;
          _this.timer = setTimeout(smoothUp, 10);
        } else {
          srcollDom.scrollTop = total;
          //   srcollDom.documentElement.scrollTop = total;
        }
      }
      //   Firefox： document.documentElement.scrollTop
    },
    onScroll() {
      let srcollDom = document.querySelector(".el-scrollbar__wrap");
      let scrolled = srcollDom.scrollTop;
      let anchorDoms = document.querySelectorAll(".anchor-dom");
      for (let i = 0; i < anchorDoms.length; i++) {
        const element = anchorDoms[i];
        if (scrolled >= element.offsetTop) {
          this.active = this.utilsList[i].id;
        }
        if (scrolled <= element.offsetTop) {
          this.activeName = this.utilsList[i].id;
        }
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.utils-wrap {
  height: 100%;
}
h3 {
  margin: 10px 0 20px;
}
.utils-list {
  position: fixed;
  right: 100px;
  top: 100px;
  box-shadow: $primary-shadow;
  padding: 6px 6px;
  border-radius: 4px;
  background: #fff;
  z-index: 900;
  li {
    font-size: 14px;
    line-height: 1.8;
    cursor: pointer;
    padding: 2px 6px;
    transition: all 0.25s;
    color: rgb(105, 105, 105);
    & + li {
      border-top: solid 1px rgb(231, 231, 231);
    }
    &:hover {
      color: $primary-color;
    }
    &.activelist {
      color: $primary-color;
    }
  }
}
@media screen and (max-width: 768px){
  .utils-list{
    right: 20px;
  }
  
}
.utils-item {
  height: 1000px;
}
.drag_itself {
  color: #fff;
  background-color: #018E9A;
  border-color: #018E9A;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
}
</style>