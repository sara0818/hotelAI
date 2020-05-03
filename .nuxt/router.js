import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f7622e8 = () => interopDefault(import('..\\pages\\empCheck.vue' /* webpackChunkName: "pages_empCheck" */))
const _2b08e4f6 = () => interopDefault(import('..\\pages\\evaluate.vue' /* webpackChunkName: "pages_evaluate" */))
const _15460e9f = () => interopDefault(import('..\\pages\\data_analysis\\fitnessAnalysis.vue' /* webpackChunkName: "pages_data_analysis_fitnessAnalysis" */))
const _77479066 = () => interopDefault(import('..\\pages\\data_analysis\\goodsAnalysis.vue' /* webpackChunkName: "pages_data_analysis_goodsAnalysis" */))
const _118cc1d6 = () => interopDefault(import('..\\pages\\data_analysis\\monitor.vue' /* webpackChunkName: "pages_data_analysis_monitor" */))
const _7f2d1964 = () => interopDefault(import('..\\pages\\data_analysis\\restaurantAnalysis.vue' /* webpackChunkName: "pages_data_analysis_restaurantAnalysis" */))
const _e7eba4a8 = () => interopDefault(import('..\\pages\\data_analysis\\roomAnalysis.vue' /* webpackChunkName: "pages_data_analysis_roomAnalysis" */))
const _372227ec = () => interopDefault(import('..\\pages\\LogIn\\logIn.vue' /* webpackChunkName: "pages_LogIn_logIn" */))
const _278293f2 = () => interopDefault(import('..\\pages\\LogIn\\loginWithPsw.vue' /* webpackChunkName: "pages_LogIn_loginWithPsw" */))
const _406e0db0 = () => interopDefault(import('..\\pages\\LogIn\\Register.vue' /* webpackChunkName: "pages_LogIn_Register" */))
const _25ffff5e = () => interopDefault(import('..\\pages\\monitor\\elevatorMonitor.vue' /* webpackChunkName: "pages_monitor_elevatorMonitor" */))
const _1d1345d0 = () => interopDefault(import('..\\pages\\monitor\\firstFloorMonitor.vue' /* webpackChunkName: "pages_monitor_firstFloorMonitor" */))
const _7a690670 = () => interopDefault(import('..\\pages\\monitor\\fitnessMonitor.vue' /* webpackChunkName: "pages_monitor_fitnessMonitor" */))
const _42d54d7c = () => interopDefault(import('..\\pages\\monitor\\lobbyMonitor.vue' /* webpackChunkName: "pages_monitor_lobbyMonitor" */))
const _54ab36a0 = () => interopDefault(import('..\\pages\\monitor\\parkingMonitor.vue' /* webpackChunkName: "pages_monitor_parkingMonitor" */))
const _11f8a1a2 = () => interopDefault(import('..\\pages\\monitor\\restaurantMonitor.vue' /* webpackChunkName: "pages_monitor_restaurantMonitor" */))
const _bae11140 = () => interopDefault(import('..\\pages\\monitor\\secondFloorMonitor.vue' /* webpackChunkName: "pages_monitor_secondFloorMonitor" */))
const _07f36c2e = () => interopDefault(import('..\\pages\\user_service\\eatingService.vue' /* webpackChunkName: "pages_user_service_eatingService" */))
const _f0bdb04c = () => interopDefault(import('..\\pages\\user_service\\fitnessService.vue' /* webpackChunkName: "pages_user_service_fitnessService" */))
const _55548b72 = () => interopDefault(import('..\\pages\\user_service\\orderQuery.vue' /* webpackChunkName: "pages_user_service_orderQuery" */))
const _41771b90 = () => interopDefault(import('..\\pages\\user_service\\register.vue' /* webpackChunkName: "pages_user_service_register" */))
const _1a033206 = () => interopDefault(import('..\\pages\\user_service\\roomService.vue' /* webpackChunkName: "pages_user_service_roomService" */))
const _3f2ee500 = () => interopDefault(import('..\\pages\\user_service\\serviceQuery.vue' /* webpackChunkName: "pages_user_service_serviceQuery" */))
const _0d63dfd4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/empCheck",
    component: _9f7622e8,
    name: "empCheck"
  }, {
    path: "/evaluate",
    component: _2b08e4f6,
    name: "evaluate"
  }, {
    path: "/data_analysis/fitnessAnalysis",
    component: _15460e9f,
    name: "data_analysis-fitnessAnalysis"
  }, {
    path: "/data_analysis/goodsAnalysis",
    component: _77479066,
    name: "data_analysis-goodsAnalysis"
  }, {
    path: "/data_analysis/monitor",
    component: _118cc1d6,
    name: "data_analysis-monitor"
  }, {
    path: "/data_analysis/restaurantAnalysis",
    component: _7f2d1964,
    name: "data_analysis-restaurantAnalysis"
  }, {
    path: "/data_analysis/roomAnalysis",
    component: _e7eba4a8,
    name: "data_analysis-roomAnalysis"
  }, {
    path: "/LogIn/logIn",
    component: _372227ec,
    name: "LogIn-logIn"
  }, {
    path: "/LogIn/loginWithPsw",
    component: _278293f2,
    name: "LogIn-loginWithPsw"
  }, {
    path: "/LogIn/Register",
    component: _406e0db0,
    name: "LogIn-Register"
  }, {
    path: "/monitor/elevatorMonitor",
    component: _25ffff5e,
    name: "monitor-elevatorMonitor"
  }, {
    path: "/monitor/firstFloorMonitor",
    component: _1d1345d0,
    name: "monitor-firstFloorMonitor"
  }, {
    path: "/monitor/fitnessMonitor",
    component: _7a690670,
    name: "monitor-fitnessMonitor"
  }, {
    path: "/monitor/lobbyMonitor",
    component: _42d54d7c,
    name: "monitor-lobbyMonitor"
  }, {
    path: "/monitor/parkingMonitor",
    component: _54ab36a0,
    name: "monitor-parkingMonitor"
  }, {
    path: "/monitor/restaurantMonitor",
    component: _11f8a1a2,
    name: "monitor-restaurantMonitor"
  }, {
    path: "/monitor/secondFloorMonitor",
    component: _bae11140,
    name: "monitor-secondFloorMonitor"
  }, {
    path: "/user_service/eatingService",
    component: _07f36c2e,
    name: "user_service-eatingService"
  }, {
    path: "/user_service/fitnessService",
    component: _f0bdb04c,
    name: "user_service-fitnessService"
  }, {
    path: "/user_service/orderQuery",
    component: _55548b72,
    name: "user_service-orderQuery"
  }, {
    path: "/user_service/register",
    component: _41771b90,
    name: "user_service-register"
  }, {
    path: "/user_service/roomService",
    component: _1a033206,
    name: "user_service-roomService"
  }, {
    path: "/user_service/serviceQuery",
    component: _3f2ee500,
    name: "user_service-serviceQuery"
  }, {
    path: "/",
    component: _0d63dfd4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
