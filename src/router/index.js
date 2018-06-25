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
import NotFound from '@/components/NotFound';
import ActivateAccount from '@/components/ActivateAccount';
import GForms from '@/components/GForms';
import AboutPaideia from '@/components/AboutPaideia';
import News from '@/components/News';
import UseTerm from '@/components/UseTerm';
import Admin from '@/components/Admin';
import MoreDepoiments from '@/components/MoreDepoiments';
import Contact from '@/components/Contact';
import store from "../vuex/store"

Vue.component('Footer', Footer);
Vue.component('HeaderNav', HeaderNav);
Vue.use(Router);

const checkCanSubscribe = (to, from, next) => {
    if(store.getters.isAuthenticated(store.state) && (store.getters.authenticatedUser(store.state) && !store.getters.authenticatedUser(store.state).isSubscribed)) {
      debugger
      next();
      return
    }
    next('/');
}

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
      beforeEnter: checkCanSubscribe,
      children: [
        {
          path: 'basic',
          name: 'BasicInfo',
          component: BasicInfo,
          beforeEnter: checkCanSubscribe,
        },
        {
          path: 'social',
          name: 'SocialEco',
          component: GForms,
          beforeEnter: checkCanSubscribe,
        },
      ],
    }, {
      path: '/ativacao',
      name: 'ActivateAccount',
      component: ActivateAccount,
      props: (route) => ({ token: route.query.token }),
    },{
      path: '/about',
      name: 'Sobre',
      component: AboutPaideia,
    },{
      path: '/news',
      name: 'News',
      component: News,
    },{
      path: '/depoimentos',
      name: 'MoreDepoiments',
      component: MoreDepoiments,
    },{
      path: '/contato',
      name: 'Contact',
      component: Contact,
    },{
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ],
});
