import Vue from 'vue';
import Router from 'vue-router';
import LoginVue from '@/components/LoginVue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginVue,
    },
  ],
});
