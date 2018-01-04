import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Subscribe from '@/components/Subscribe';
import WizardProcess from '@/components/WizardProcess';
import BasicInfo from '@/components/BasicInfo';
import AdditionalInfo from '@/components/AdditionalInfo';
import SocialEco from '@/components/SocialEco';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Login',
      component: Login,
    },
    {
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
    },
  ],
});
