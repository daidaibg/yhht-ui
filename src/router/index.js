/*
 * @Author: daidai
 * @Date: 2021-07-14 17:24:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-17 11:33:55
 * @FilePath: \yhht-ui\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { yhProgress } from 'yhht-ui/src/util';
yhProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3, // 初始化时的最小百分比
})
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/components/installation',
  },
  {
    path: '/Home',
    name: 'components',
    component: Home
  },

  {
    path: '/components',
    name: 'Components',
    redirect: "com-index",
    component: () => import(/* webpackChunkName: "Components" */ '../views/Components.vue'),
    children: [
      {
        path: '/com-index',
        name: 'com-index',
        redirect: '/components/installation',
        component: () => import(/* webpackChunkName: "Components" */ '../views/Com-index.vue'),
        children: [
          {
            path: '/components/theme',
            name: 'theme',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/theme/theme.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/plugin',
            name: 'plugin',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/plugin/plugin.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/yhProgress',
            name: 'yhProgress',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com-js/yhProgress.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/utils',
            name: 'utils',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com-js/Utils.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/colors',
            name: 'colors',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com-js/Colors.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/installation',
            name: 'Installation',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Installation.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/tree-js',
            name: 'treeJs',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com-js/Tree-js.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/any-rule',
            name: 'any-rule',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com-js/Any-rule.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Search.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/installLinkEle',
            name: 'installLinkEle',
            component: () => import(/* webpackChunkName: "ele" */ '../views/link-ele/install-link-ele.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/table-ele',
            name: 'table-ele',
            component: () => import(/* webpackChunkName: "ele" */ '../views/link-ele/Tables/Table-ele.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/select-tree',
            name: 'select-tree',
            component: () => import(/* webpackChunkName: "ele" */ '../views/link-ele/Selects/Select-tree.vue'),
            meta: {
              type: 'com'
            }
          },

          {
            path: '/components/upload',
            name: 'upload',
            component: () => import(/* webpackChunkName: "ele" */ '../views/com/uploads/Upload.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/getxy',
            name: 'getxy',
            component: () => import(/* webpackChunkName: "ele" */ '../views/link-ele/Get-xy/Get-xy.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/coordinates',
            name: 'coordinates',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/coordinate/coordinate.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/icon',
            name: 'icon',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Icon/Icon.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/loading',
            name: 'loading',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Loading/Loading.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/drag',
            name: 'drag',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/Drag/Drag.vue'),
            meta: {
              type: 'com'
            }
          },
          {
            path: '/components/buttons',
            name: 'buttons',
            component: () => import(/* webpackChunkName: "Components" */ '../views/com/button/button.vue'),
            meta: {
              type: 'com'
            }
          },
          //测试
          {
            path: '/components/test-md',
            name: 'test-md',
            component: () => import(/* webpackChunkName: "Components" */ '../views/tests/test-md.vue'),
            meta: {
              type: 'com'
            }
          },
        ]
      },
      {
        path: '/sysAndMap',
        name: 'sysAndMap',
        component: () => import(/* webpackChunkName: "about" */ '../views/Sys-And-map.vue'),
        meta: {
          type: 'sysAndMap'
        }
      },
      {
        path: '/map',
        name: 'map',
        component: () => import(/* webpackChunkName: "map" */ '../views/map/map-index.vue'),
        meta: {
          type: 'map'
        }
      },

    ]
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_URL_HISTORY_URL ?   `/${process.env.VUE_APP_URL_HISTORY_URL}/`:'/',
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path !== from.path) {
    // 每次切换页面时，调用进度条  同一个页面不调用
    yhProgress.start();
  }
  next();
});
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  yhProgress.done()
})
export default router
