import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/homePage.vue';
import chat from '../components/chatPage.vue';
import plan from '../components/planPage.vue';
import connect from '../components/connectPage.vue';
import profile from '../components/profilePage.vue';
import setting from '../components/settingPage.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/chatPage',
    name: 'chat',
    component: chat
  },
  {
    path: '/planPage',
    name: 'plan',
    component: plan
  },
  {
    path: '/connectPage',
    name: 'connect',
    component: connect
  },
  {
    path: '/profilePage',
    name: 'profile',
    component: profile
  },
  {
    path: '/settingPage',
    name: 'setting',
    component: setting
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;