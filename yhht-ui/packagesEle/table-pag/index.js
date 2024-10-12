// @ts-ignore
import tablePag from './src/main.vue';

/* istanbul ignore next */
tablePag.install = function(Vue) {
  Vue.component(tablePag.name, tablePag);
};

export default tablePag;
