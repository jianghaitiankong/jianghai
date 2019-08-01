
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import Axios from 'axios' //AJAX
import store from "./store" // 引入 store
import "babel-polyfill"; 
import ElementUI from 'element-ui'; //element-ui
import echarts from 'echarts'; // E-charts 
import 'element-ui/lib/theme-chalk/index.css';
// import $ from 'jquery'
import request from '@/service/http'
import util from '@/util/util'
import VueWechatTitle from 'vue-wechat-title' 
import '../static/css/bootsnav.css'
import '../static/css/style.css'
import '../static/css/bootstrap.min.css'
import '../static/css/swiper.min.css'
import '../static/css/animate.css'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$request = request
Vue.prototype.$util = util
Vue.prototype.$echarts = echarts //引入echarts

Vue.use(VueWechatTitle);
Vue.use(ElementUI, {
  size: 'small'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
