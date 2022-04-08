<!--
 * @Author: daidai
 * @Date: 2021-09-17 09:31:48
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 11:45:39
 * @FilePath: \yhht-ui\src\views\Com-index.vue
-->
<template>
  <el-scrollbar style="height: 100%" class="scrolls" id="content-scroll">
    <el-container class="page-container maxphone">
      <Menu />
      
      <el-main ref="main" class="main-inner">
        <router-view />
      </el-main>
    </el-container>
    <el-backtop target=".el-scrollbar .el-scrollbar__wrap"></el-backtop>
  </el-scrollbar>
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

<style lang="scss"  >
.scrolls {
  width: 100%;
  > .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
// #content-scroll {
//   .el-scrollbar__view {
//     min-height: 100%;
//     .maxphone{
//       height: 100%;
//     }
//   }
// }


</style>