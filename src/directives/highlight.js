/*
 * @Author: daidai
 * @Date: 2022-02-09 12:01:17
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 10:36:01
 * @FilePath: \yhht-ui\src\directives\highlight.js
 */
// 代码高亮插件
import Vue from 'vue'
import hljs from 'highlight.js';
// import 'highlight.js/styles/base16/dirtysea.css' 
// import 'highlight.js/styles/atom-one-light.css' 

// import 'highlight.js/styles/atom-one-dark.css' 

//googlecode
//color-brewer   element 用的

//googlecode
//googlecode

// 必须导入 否则没样式
const high = {
  // deep: true,
  bind: function (el, binding) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightElement(block)
    })
  },
  componentUpdated: function (el, binding) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightElement(block)
    })
  }
}
Vue.directive('highlight', high)