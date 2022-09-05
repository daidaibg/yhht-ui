<!--
 * @Author: daidai
 * @Date: 2021-09-17 09:31:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-23 11:50:32
 * @FilePath: \yhht-ui\src\views\Com-index.vue
-->
<template>
  <el-scrollbar style="height: 100%" class="scrolls" id="content-scroll">
    <el-container class="page-container maxphone">
      <Menu :active="active" />

      <el-main ref="main" class="main-inner">
        <router-view />
        <div class="previous-ext ">
          <div class=" item cursor-pointer" @click="go(prev.url)" v-if="prev">
            <i class="yh-icons-arrow-left"></i>
            <span>{{ prev.name }}</span>
          </div>
          <div v-else></div>
          <div class=" item cursor-pointer" @click="go(next.url)" v-if="next">
            <span>{{ next.name }}</span>
            <i class="yh-icons-arrow-right"></i>
          </div>
          <div v-else></div>
        </div>
        <yh-footer/>
      </el-main>

    </el-container>
    <el-backtop target=".el-scrollbar .el-scrollbar__wrap"></el-backtop>
  </el-scrollbar>
</template>

<script>
import Menu from "./Menu.vue";
import Header from "./Header.vue";
import { menuPathList } from "./menu/menu"

export default {
  data() {
    return {
      prev: null,
      next: null,

    };
  },
  mounted() { },
  updated() { },
  methods: {
    go(url) {
      this.$router.push(url)
    }
  },
  computed: {
    active() {
      let path = this.$route.path
      let len = menuPathList.length
      menuPathList.map((item, i) => {
        if (item.url == path) {
          if (i == 0) {
            this.prev = null
            this.next = menuPathList[i + 1]
          } else if (i == len) {
            this.prev = menuPathList[i - 1]
            this.next = null
          } else {
            this.prev = menuPathList[i - 1]
            this.next = menuPathList[i + 1]
          }
        }
      })
      return path;
    },

  },
  components: {
    Menu,
    Header,
  },
};
</script>

<style lang="scss"  >
.scrolls {
  width: 100%;

  >.el-scrollbar__wrap {
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

.previous-ext {
  font-size: 14px;
  line-height: 1;
  padding-top:64px;
  justify-content: space-between;
  display: flex;
  .item {
    color: var(--yh-text-color-secondary);
    display: flex;
    align-items: center;

    &:hover {
      color: var(--yh-brand-color) ;
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }
}
</style>