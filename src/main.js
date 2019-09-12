import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import 'babel-polyfill';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import VueMaterial from 'vue-material';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';


Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMaterial)
Vue.use(messagePlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
