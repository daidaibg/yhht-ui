<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-21 10:36:56
 * @FilePath: \yhht-ui\src\views\Header.vue
-->
<template >
  <el-container class="headers">
    <div class="left ">
    
    <div class="logo">
      <img src="../assets/img/logoimg.png" alt="" />
      <p>yhht-ui</p>
    </div>
    </div>
  
    <div class="right">
      <div class="right_inner">
        <div class="item" :class="{ activeItem: active == 'com' }">
          <router-link :to="{ path: '/components' }">组件&JS</router-link>
        </div>
         <div class="item" :class="{ activeItem: active == 'any' }">
          <router-link :to="{ path: '/public/any-rule' }">正则</router-link>
        </div>
        <!-- <div class="item" :class="{ activeItem: active == 'map' }">
          <router-link :to="{ path: '/map' }">地图(gis)</router-link>
        </div>
        <div class="item" :class="{ activeItem: active == 'sysAndMap' }">
          <router-link :to="{ path: '/sysAndMap' }">地图+管理</router-link>
        </div> -->
      </div>
      <el-dropdown class="phoneTab" trigger="click" @command="command">
        <i class="el-icon-s-operation"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/components">组件&JS</el-dropdown-item>
          <el-dropdown-item command="/public/any-rule">正则</el-dropdown-item>

          <!-- <el-dropdown-item command="/map">地图(gis)</el-dropdown-item>
          <el-dropdown-item command="/sysAndMap">地图+管理</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      <div class="actionTheme">
        <div
          class="actionTheme-tabs__block"
          style="width: 28px"
          ref="thenmactivetab"
        ></div>
        <div
          @click="selectTheme('light')"
          data-theme="light"
          ref="light"
          class="sun action_item"
          :class="{ activetheme: activetheme == 'light' }"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M9.99996 3.15217C10.5252 3.15217 10.951 2.72636 10.951 2.20109C10.951 1.67582 10.5252 1.25 9.99996 1.25C9.47469 1.25 9.04887 1.67582 9.04887 2.20109C9.04887 2.72636 9.47469 3.15217 9.99996 3.15217Z"
            ></path>
            <path
              fill="currentColor"
              d="M9.99992 4.29348C6.84829 4.29348 4.2934 6.84838 4.2934 10C4.2934 13.1516 6.84829 15.7065 9.99992 15.7065C13.1515 15.7065 15.7064 13.1516 15.7064 10C15.7064 6.84838 13.1515 4.29348 9.99992 4.29348Z"
            ></path>
            <path
              fill="currentColor"
              d="M16.4673 4.4837C16.4673 5.00896 16.0415 5.43478 15.5162 5.43478C14.991 5.43478 14.5652 5.00896 14.5652 4.4837C14.5652 3.95843 14.991 3.53261 15.5162 3.53261C16.0415 3.53261 16.4673 3.95843 16.4673 4.4837Z"
            ></path>
            <path
              fill="currentColor"
              d="M17.7989 10.9511C18.3241 10.9511 18.75 10.5253 18.75 10C18.75 9.47474 18.3241 9.04891 17.7989 9.04891C17.2736 9.04891 16.8478 9.47474 16.8478 10C16.8478 10.5253 17.2736 10.9511 17.7989 10.9511Z"
            ></path>
            <path
              fill="currentColor"
              d="M16.4673 15.5163C16.4673 16.0416 16.0415 16.4674 15.5162 16.4674C14.991 16.4674 14.5652 16.0416 14.5652 15.5163C14.5652 14.991 14.991 14.5652 15.5162 14.5652C16.0415 14.5652 16.4673 14.991 16.4673 15.5163Z"
            ></path>
            <path
              fill="currentColor"
              d="M9.99996 18.75C10.5252 18.75 10.951 18.3242 10.951 17.7989C10.951 17.2736 10.5252 16.8478 9.99996 16.8478C9.47469 16.8478 9.04887 17.2736 9.04887 17.7989C9.04887 18.3242 9.47469 18.75 9.99996 18.75Z"
            ></path>
            <path
              fill="currentColor"
              d="M5.43469 15.5163C5.43469 16.0416 5.00887 16.4674 4.4836 16.4674C3.95833 16.4674 3.53252 16.0416 3.53252 15.5163C3.53252 14.991 3.95833 14.5652 4.4836 14.5652C5.00887 14.5652 5.43469 14.991 5.43469 15.5163Z"
            ></path>
            <path
              fill="currentColor"
              d="M2.20096 10.9511C2.72623 10.9511 3.15205 10.5253 3.15205 10C3.15205 9.47474 2.72623 9.04891 2.20096 9.04891C1.67569 9.04891 1.24988 9.47474 1.24988 10C1.24988 10.5253 1.67569 10.9511 2.20096 10.9511Z"
            ></path>
            <path
              fill="currentColor"
              d="M5.43469 4.4837C5.43469 5.00896 5.00887 5.43478 4.4836 5.43478C3.95833 5.43478 3.53252 5.00896 3.53252 4.4837C3.53252 3.95843 3.95833 3.53261 4.4836 3.53261C5.00887 3.53261 5.43469 3.95843 5.43469 4.4837Z"
            ></path>
          </svg>
        </div>

        <div
          @click="selectTheme('dark')"
          data-theme="dark"
          ref="dark"
          class="moon action_item"
          :class="{ activetheme: activetheme == 'dark' }"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M9.99993 3.12494C6.20294 3.12494 3.12488 6.203 3.12488 10C3.12488 13.797 6.20294 16.8751 9.99993 16.8751C13.7969 16.8751 16.875 13.797 16.875 10C16.875 9.52352 16.8264 9.0577 16.7337 8.6075C16.6752 8.32295 16.4282 8.11628 16.1378 8.10872C15.8474 8.10117 15.5901 8.29473 15.5168 8.57585C15.1411 10.0167 13.8302 11.0795 12.2727 11.0795C10.4212 11.0795 8.92039 9.57869 8.92039 7.72726C8.92039 6.16969 9.98319 4.85879 11.4241 4.48312C11.7052 4.40983 11.8988 4.15249 11.8912 3.86207C11.8836 3.57165 11.677 3.32473 11.3924 3.26616C10.9422 3.1735 10.4764 3.12494 9.99993 3.12494Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  name: "Header",
  computed: {
    active() {
      return this.$route.meta.type;
    },
  },
  data() {
    return {
      activetheme: "light",
    };
  },
  created() {
    // console.log(this.$route);
  },
  methods: {
    selectTheme(type) {
      this.activetheme = type;
      document.documentElement.setAttribute("theme-mode", type);
      this.$refs.thenmactivetab.style.left = this.$refs[type].offsetLeft + "px";
    },
    command(type) {
      console.log(type);
      this.$router.push(type);
    },
  },
};
</script>
<style lang="scss">
.headers {
  flex: 1;
  width: 1140px;
  margin: 0 auto;
  height: 100%;
  border-bottom: 1px solid var(--header-bottom-color);
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    img {
      height: 46px;
      margin-left: 0px;
    }
    p {
      font-size: 26px;
      font-weight: 900;
      color: #018e9a;
      margin-left: 12px;
      color: transparent;
      background-color: #018e9a;
      text-shadow: var(--header-logo-shadow);
      -webkit-background-clip: text;
      font-family: STXinwei, FZShuTi, "微软雅黑", "黑体", "宋体";
      line-height: 1;
    }
  }
  .left{
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    .right_inner {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .item {
      margin: 0 10px;
      height: 100%;
      border-bottom: solid 2px rgba(25, 137, 250, 0);

      a {
        height: 100%;
        color: var(--yh-brand-color-11);
        display: flex;
        align-items: center;
      }
      cursor: pointer;
      &:hover {
        a {
          color: var(--yh-brand-color) ;
        }
      }
    }
    .activeItem {
      border-color: var(--yh-brand-color) ;

      a {
        color: var(--yh-brand-color) ;
      }
    }

    .phoneTab {
      .el-icon-s-operation {
        font-size: 20px;
        font-weight: 900px;
        margin-right: 10px;
      }
    }
  }

  .actionTheme {
    min-width: 60px;
    width: 60px;
    height: 32px;
    padding: 2px;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    background: var(--bg-color-component);
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    position: relative;
    .action_item {
      width: 50%;
      height: 28px;
      padding: 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      color: var(--text-disabled);
      position: relative;
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
      }
    }
    .actionTheme-tabs__block {
      position: absolute;
      background-color: var(--bg-color-tab-select);
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px;
      position: absolute;
      height: calc(100% - 4px);
      // top: 2px;
      left: 2px;
      transition: all var(--anim-time-fn-easing) var(--anim-duration-moderate);
      border-radius: var(--border-radius);
    }
    .action_item.activetheme.sun {
      color: rgb(255, 189, 46);
    }
    .action_item.activetheme.moon {
      color: rgb(255, 255, 255);
    }
  }
}
</style>