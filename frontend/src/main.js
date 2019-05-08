/*
 * Copyright (C) 2019 UAVCAN Development Team  <uavcan.org>
 * This software is distributed under the terms of the MIT License.
 *
 * Author: Theodoros Ntakouris <zarkopafilis@gmail.com>
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import {AppRouter} from '@/Router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import VueTruncate from 'vue-truncate-filter'
import configureAxios from '@/api/AxiosConfig'

Vue.use(BootstrapVue)
Vue.use(VueTruncate)

configureAxios()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: AppRouter,
  components: { App },
  template: '<App/>'
})
