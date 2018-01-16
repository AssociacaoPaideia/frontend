// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueApollo from 'vue-apollo';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import { apolloClient, apolloProvider }  from './graphql/graphql';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueApollo);
/* eslint-disable no-new */

Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider ,
  template: '<App/>',
  components: { App },
  store: new Vuex.Store(store),
});

