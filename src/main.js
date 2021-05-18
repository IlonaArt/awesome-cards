import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CardContent from './components/CardContent.vue';
import CardList from './components/CardList.vue';
import E404 from './components/Err404.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const Content = CardContent;
const List = CardList;

const routes = [
  { path: '', component: List},
  { name: 'content', path: '/card/:id', component: Content },
  { path: '*', component: E404 }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
