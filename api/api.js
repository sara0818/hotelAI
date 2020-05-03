import Vue from 'vue'

import md5 from'js-md5'
import axios from'axios'
import VueCookies from 'vue-cookies'

// 让ajax携带cookie
axios.defaults.withCredentials = true;

// 使用 vue cookie
Vue.config.productionTip = false;
Vue.use(VueCookies);

Vue.prototype.$axios=axios;
Vue.prototype.$md5=md5;
Vue.prototype.$server="http://39.96.51.119";
Vue.prototype.$localServer="http://127.0.0.1";
Vue.prototype.$url=Vue.prototype.$server+":10010";
Vue.prototype.$loginUrl=Vue.prototype.$url+"/user/login";
Vue.prototype.$registerUrl=Vue.prototype.$url+"/user/register";
Vue.prototype.$addServiceUrl=Vue.prototype.$url+"/service/addService";
Vue.prototype.$finishService=Vue.prototype.$url+"/service/finishService";
Vue.prototype.$searchService=Vue.prototype.$url+"/service/searchService";
Vue.prototype.$selectOne=Vue.prototype.$url+"/service/selectOne";
Vue.prototype.$searchServiceByType=Vue.prototype.$url+"/service/searchServiceByType";
Vue.prototype.$salt="WXRLJWLMLHXSZY123123";
