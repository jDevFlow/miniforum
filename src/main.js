import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate'
import 'babel-polyfill';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import VueMaterial from 'vue-material';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import router from './router';

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMaterial)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
