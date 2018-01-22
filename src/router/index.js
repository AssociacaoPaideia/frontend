import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Subscribe from '@/components/Subscribe';
import WizardProcess from '@/components/WizardProcess';
import BasicInfo from '@/components/BasicInfo';
import AdditionalInfo from '@/components/AdditionalInfo';
import SocialEco from '@/components/SocialEco';
import Signup from '@/components/Signup';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import Index from '@/components/Index';
import NotFound from '@/components/NotFound'

Vue.component('Footer', Footer);
Vue.component('HeaderNav', HeaderNav);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/signup',
      name: 'Inscrição',
      component: Signup,
    }, {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe,
      children: [
        {
          path: 'basic',
          name: 'BasicInfo',
          component: BasicInfo,
        },
        {
          path: 'additional',
          name: 'AdditionalInfo',
          component: AdditionalInfo,
        },
        {
          path: 'social',
          name: 'SocialEco',
          component: SocialEco,
        },
      ],
    }, {
      path: '/wizard',
      name: 'Wizard',
      component: WizardProcess,
    }, {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ],
});
