<!--
 * @Author: daidai
 * @Date: 2022-02-21 09:03:10
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 14:38:18
 * @FilePath: \yhht-ui\src\views\com-js\Any-rule.vue
-->
<template>
  <div class="rules">
    <el-input
      v-model="input"
      placeholder="搜索关键词：如密码"
      size="medium "
      class="search-input"
      clearable
      @input="searchInput"
    ></el-input>
    <ul class="rullist">
      <li v-for="(item, i) in searchList" :key="i">
        <i class="border"></i>
        <h2>{{ item.name }}</h2>
        <p class="rule">
          <span
            class="btn-copy"
            @click="copy(item)"
            >点击复制</span
          ><code class="javascript">{{ item.rule }}</code>
        </p>
        <div class="textiput">
          <el-input
            v-model="searchList[i].value"
            :placeholder="item.demo"
            size="small "
            @blur="() => onblur(item, i)"
            @input="(val) => oninput(val, item, i)"
          ></el-input>
          <span class="btn-clear" @click="clearInput(item, i)">清空</span>
          <div
            class="rule-success"
            :class="{ 'rule-error': item.msg == '不通过' }"
          >
            {{ item.msg }}
          </div>
        </div>
        <div class="trigger">
          <p class="title">验证时机</p>
          <el-checkbox v-model="searchList[i].blur">blur</el-checkbox>
          <el-checkbox v-model="searchList[i].keyup">keyup</el-checkbox>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ruleList } from "./Any-rule";
import Clipboard from "clipboard";

export default {
  data() {
    return {
      ruleList: ruleList,
      input: "",
      searchList: [...ruleList],
      copyText:''
    };
  },
  created() {},

  mounted() {
   
  },
  methods: {
    copy(item) {
      var clipboard = new Clipboard(".btn-copy",{
          text:()=>{
              return item.rule.toString()
          }
      });
      clipboard.on("success", (e) => {
        clipboard.destroy();
        // console.log("复制成功")
        this.$message.success("复制成功")
      });
      clipboard.on("error", (e) => {
        clipboard.destroy();
        // console.log("复制失败")
        this.$message.error("复制失败")
      });
    },
    searchInput(query) {
      this.searchList = this.ruleList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    },
    clearInput(row, i) {
      this.searchList[i].value = "";
      this.onblur(this.searchList[i]);
    },
    onblur(row, i) {
      if (row.value == "") {
        row.msg = "";
        return;
      }
      if (row.blur) {
        let flag = row.rule.test(row.value);
        if (flag) {
          row.msg = "通过";
        } else {
          row.msg = "不通过";
        }
      }
    },
    oninput(val, row, i) {
      //   console.log(val, row, i);
      if (val == "") {
        row.msg = "";
        return;
      }
      if (row.keyup) {
        let flag = row.rule.test(val);
        // console.log(flag);
        if (flag) {
          row.msg = "通过";
        } else {
          row.msg = "不通过";
        }
      }
    },
  },
};
</script>
<style lang='scss' scoped>

@keyframes shrinkBorder {
  0% {
    transform: translateY(-100%);
  }

  50% {
    width: 4px;
    opacity: 0.62;
  }

  to {
    left: 0;
    transform: translateY(0);
  }
}
.rules {
    position: relative;
  .search-input {
    margin-bottom: 20px;
    box-shadow: 1px 2px 2px var( --yh-shadow-1);
    // position: fixed;
    /deep/.el-input__inner {
      padding: 4px 15px;
      height: auto;
      font-size: 16px;
    }
    /deep/ .el-input__suffix {
      i {
        font-size: 16px;
        margin-top: 2px;
      }
    }
  }

  .rullist {
    li {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      margin-bottom: 15px;
      padding: 15px;
      border-color: var(--yh-border-level-1-color);
      border-width: 1px;
      border-style: solid;
      box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.1);
      &:hover {
        background-color: var(--yh-bg-color-container-hover);
        transition: all 0.6s;
        border-radius: 4px;
        border-color: var(--yh-border-level-1-color);
        box-shadow: none;
        > .border {
          animation: shrinkBorder 0.5s;
          left: 0;
        }
      }
    }
    .border {
      position: absolute;
      background: var(--yh-success-color-hover);
      width: 4px;
      height: 100%;
      top: 0;
      left: -4px;
    }
    h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    .rule {
      margin-top: 15px;
      padding: 5px 15px;
      background: var(--yh-bg-color-component);
      color: var(--yh-text-color-primary);
      border-radius: 4px;
      line-height: 2;

      .btn-copy {
        display: inline-block;
        border-radius: 4px;
        margin-right: 15px;
        padding: 0 5px;
        background: var(--yh-success-color-4);
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        box-shadow: 1px 2px 3px var(--yh-success-color-4);
        margin-bottom: 1px;
        &:hover {
          transition: all 0.3s;
          // color: hsla(0, 0%, 100%, 0.6);
        }
        &:active {
          opacity: 0.6;
          box-shadow: none;
        }
      }
    }
    .textiput {
      display: flex;
      align-items: center;
      margin-bottom: 22px;
      position: relative;
      .el-input {
        flex: 1;
      }
      .btn-clear {
        cursor: pointer;
        padding: 5px;
        color: var(--yh-text-color-primary);
        display: inline-block;
        font-size: 14px;
      }
      .rule-success {
        position: absolute;
        top: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #4caf50;
      }
      .rule-error {
        color: #ff5722;
      }
    }
    .trigger {
      display: flex;
      align-items: center;
      align-content: center;
      height: 20px;
      .title {
        font-size: 14px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        color: var(--yh-text-color-primary);
        margin-right: 20px;
      }
    }
  }
}
</style>