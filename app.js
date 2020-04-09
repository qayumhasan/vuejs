

require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');


window.axios.defaults.baseURL ='https://lara-vue-6488e.firebaseio.com'
window.axios.defaults.headers.common['Authorization'] ='Qayum hasan'
window.axios.defaults.headers.get['Accepts'] ='application/json'

// import vue ruter

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './route';

// V-form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'hash',
})


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    
});
