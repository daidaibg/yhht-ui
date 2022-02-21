/*
 * @Author: daidai
 * @Date: 2021-09-09 17:34:47
 * @LastEditors: daidai
 * @LastEditTime: 2021-09-11 15:58:53
 * @FilePath: \npm-gd\packages\search\index.js
 */
import Search from './src/search.vue';

/* istanbul ignore next */
Search.install = function(Vue) {
  Vue.component(Search.name, Search);
};

export default Search;
