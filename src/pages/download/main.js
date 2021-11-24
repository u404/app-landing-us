/*
 * @Description:
 * @Author: zhenguojun
 * @Github:
 * @Date: 2019-08-16 09:51:49
 * @LastEditors: zhenguojun
 * @LastEditTime: 2019-08-26 10:54:11
 */
import "@/common/style/reset.scss"

import Vue from "vue"

import App from "./App.vue"

import i18n from "@sc/lib-i18n"

import { US, TW, KR, CN } from "@/js/lang"

import env from "@sc/lib-env"

Vue.use(i18n, {
  queryField: "_lang", // 默认值_lang，定义url内语言字段名
  cookieField: "_lang", // 默认值_lang，定义cookie内语言字段名
  locales: {
    US,
    TW,
    KR,
    CN
  }
})
console.log(env.browser.overseas)
Vue.prototype.$i18n.__locale = env.browser.overseas || "US"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
