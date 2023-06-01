import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'default-passive-events';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import store from "./store";



Vue.use(ElementUI);

Vue.use(mavonEditor);


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')

