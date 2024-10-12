import './src/main.css'
import Loading from './src/main.vue'

Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
