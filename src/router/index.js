import Vue from 'vue';
import Router from 'vue-router';
import NtpClient from "ntp-client";
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
import FilesUpload from '@/components/FilesUpload';
import Contact from '@/components/Contact';
import PasswordEmail from "@/components/PasswordEmail";
import NewPassword from "@/components/NewPassword";
import store from "../vuex/store"

Vue.component('Footer', Footer);
Vue.component('HeaderNav', HeaderNav);
Vue.use(Router);

const checkCanSubscribe = (to, from, next) => {
    //if(store.getters.isAuthenticated(store.state) && (store.getters.authenticatedUser(store.state) && (!store.getters.authenticatedUser(store.state).isSubscribed || store.getters.authenticatedUser(store.state).isAdmin))) {
      //next();
      //return
    //}
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
          path: 'terms',
          name: 'UseTerm',
          component: UseTerm,
          beforeEnter: checkCanSubscribe,
        },
        {
          path: 'basic',
          name: 'BasicInfo',
          component: BasicInfo,
          beforeEnter: checkCanSubscribe,
        },
        {
          path: 'docs',
          name: 'FilesUpload',
          component: FilesUpload,
          beforeEnter: checkCanSubscribe,
          props: true
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
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: checkCanSubscribe,
    },{
      path: '/email',
      name: 'PasswordEmail',
      component: PasswordEmail,
    },{
      path: '/newpassword',
      name: 'NewPassword',
      component: NewPassword,
    },{
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ],
});
