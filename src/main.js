import Vue from 'vue';
import App from './App.vue';
import store from './store';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'material-design-icons/iconfont/material-icons.css';

Vue.use(VueMaterial);

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
