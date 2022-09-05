<!--
 * @Author: daidai
 * @Date: 2021-09-17 09:31:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-21 10:41:08
 * @FilePath: \yhht-ui\src\views\Com-index.vue
-->
<template>
  <el-scrollbar style="height: 100%" class="scrolls" id="content-scroll">
    <div class=" maxphone  public_com">
        <router-view />
        <yh-footer/>
    </div>
    <el-backtop target=".el-scrollbar .el-scrollbar__wrap"></el-backtop>
  </el-scrollbar>
</template>

<script>
import Header from "./Header.vue";

export default {
  data() {
    return {
   

    };
  },
  mounted() { },
  updated() { },
  methods: {
   
  },
  computed: {
  

  },
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped >
.scrolls {
  width: 100%;

  >.el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.public_com{
    box-sizing: border-box;
    padding: 12px;
}
</style>