<template>
  <div>
    <div
      class="menu_mask"
      v-if="!phoneMenuCol"
      @click="phoneMenuCol = !phoneMenuCol"
    ></div>

    <div class="menu" :class="{ phoneMenuColIn: phoneMenuCol }">
      <div class="menu_Stretch" @click="phoneMenuCol = !phoneMenuCol">
        <i class="el-icon-s-fold" v-show="!phoneMenuCol"></i>
        <i class="el-icon-s-unfold" v-show="phoneMenuCol"></i>
      </div>
      <ul class="menuinner">
        <li v-for="(item, i) in menuList" :key="i">
          <h3 style="margin: 0" v-if="item.title">{{ item.title }}</h3>
          <ul class="menType">
            <div class="nav_title" v-if="item.tip">{{ item.tip }}</div>
            <li class="nav_item" v-for="subItem in item.sub" :key="subItem.url">
              <router-link
                :to="{ path: subItem.url }"
                :class="{ active: active == subItem.url }"
                >{{ subItem.name }}</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {menuList,} from "./menu/menu"
export default {
  data() {
    return {
      phoneMenuCol: true, //手机大小时侧边栏是否缩起来
      menuList: menuList
    };
  },
  props:{
    active:{
      type:String,
      default:''
    }
  },
  mounted() {
    // console.log(this.$route)
    // this.active = this.$route.path;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu {
  // background: #FFF;
  width: 230px;
  padding-left: 10px;
  overflow-y: hidden;
  // height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  transition: left 0.2s;
  background: var(--yh-bg-color-container);
  // margin-left: 30px;、
  // border-radius: inherit;
  // background-color: rgba(144, 147, 153, .3)
  &:hover {
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: transparent;
    background: rgba(144, 147, 153, 0.3);
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 6px;
    background: transparent;
  }
  > ul {
    padding: 44px 0;
    .nav_title {
      font-size: 12px;
      color: #999;
      color: var(--yh-text-color-placeholder);
      line-height: 26px;
      margin-top: 15px;
    }
  }
  h3 {
    font-size: 16px;
    color: #333;
    color: var(--yh-text-color-primary);
    line-height: 40px;
    height: 40px;
    font-weight: 700;
  }
  .nav_item {
    a {
      display: block;
      height: 40px;
      color: #444;
      color: var(--yh-text-color-secondary);
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      &:hover {
        color: var(--yh-brand-color) ;
      }
    }
    a.active {
      color: var(--yh-brand-color) ;
    }
  }

  .menu_Stretch {
    border-radius: 0px 3px 3px 0px;
    box-shadow: rgba(0, 0, 0, 0.26) 2px 0px 8px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    align-items: center;
    justify-content: center;
    background: var(--yh-bg-color-container);
    transition: all 0.2s;
    text-align: center;
    position: fixed;
    font-size: 24px;
    left: 240px;
    top: 160px;
    color: var(--yh-text-color-primary);
    cursor: pointer;
    display: none;
  }
}
</style>