import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Voting from './views/Voting.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      name:'home',
      meta:{layout:'main'},
      component: Home
    },
    {
      path:'/voting',
      name:'voting',
      meta:{layout:'main'},
      component: Voting
    },
    {
      path:'/profile',
      name:'profile',
      meta:{layout:'main'},
      component: Profile
    },
    {
      path:'/register',
      name:'register',
      meta:{layout:'empty'},
      component: Register
    },
    {
      path:'/login',
      name:'Login',
      meta:{layout:'empty'},
      component: Login
    }
  ]
})
