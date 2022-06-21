<!--
 * @Author: daidai
 * @Date: 2021-07-15 08:58:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-23 11:59:37
 * @FilePath: \yhht-ui\src\views\Components.vue
-->
<template>
  <el-container style="width: 100%; height: 100%" class="pagewrap">
    <el-header style="padding: 0"> <Header /> </el-header>
    <router-view />
    <!-- <el-scrollbar style="height: 100%">
      <el-container class="page-container">
        <Menu />
        <el-main ref="main">
          <router-view />
        </el-main>
      </el-container>
    </el-scrollbar> -->
  </el-container>
</template>
<script>
import Menu from "./Menu.vue";
import Header from "./Header.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  updated() {},
  methods: {},
  components: {
    Menu,
    Header,
  },
};
</script>

<style lang="scss" >
.pagewrap {
  background: var(--yh-bg-color-container);
}
.page-container_wrap {
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
  flex: 1;
}
.page-container {
  //

  padding: 0 0px;
  .el-main {
    height: 100%;
    padding-bottom: 0px;
    padding-top: 50px;
    box-sizing: border-box;
  }
}
.menu_mask {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  background: var(--yh-mask-active);
}
.el-header {
  height: 80px !important;
}
@media screen and (min-width: 768px) {
  .maxphone {
    height: 100%;
    width: 1140px;
    margin: 0 auto;
    .el-main {
      padding-left: 270px;
    }
  }

  .headers {
    .right {
      //隐藏原来头部切换框
      .right_inner {
        display: flex;
      }
      .phoneTab {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1140px) {
  .headers {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .el-header {
    height: 44px !important;
  }
  .headers {
    box-sizing: border-box;
    padding:0 10px;
    .logo {
      img {
        height: 28px;
        // margin-top: 6px;
      }
      p {
        font-size: 18px;
        margin: 4px 0px 0 6px;
      }
    }
    .right {
      .item {
        font-size: 12px;
      }
      //隐藏原来头部切换框
      .right_inner {
        display: none;
      }
      .phoneTab {
        display: block;
      }
    }
  }
  //menu后面遮罩
  .menu_mask,.menu_Stretch {
    display: block !important;
  }
  .maxphone {
    height: auto;
    display: block;
    width: auto;
    .menu {
      position: fixed;
      z-index: 999;
      left: 0px;
      // background: #fff;
      margin-top: 40px;
      > ul {
        padding-top: 0;
      }
      &.phoneMenuColIn{
        left: -100%;
      }
    }
    //菜单收起来
    .phoneMenuColIn{
      .menu_Stretch{
         left: 0 ;
      }
     
    }
    .el-main {
      padding-left: 20px;
      padding-top: 10px;
    }
  }
}
</style>

