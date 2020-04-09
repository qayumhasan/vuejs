#Vue js
## Globul axios base url set on app.js:
  window.axios.defaults.baseURL ='https://lara-vue-6488e.firebaseio.com'<br>
  window.axios.defaults.headers.common['Authorization'] ='Qayum hasan'<br>
  window.axios.defaults.headers.get['Accepts'] ='application/json'<br>
  
## Add Vue Router on app.js
  import VueRouter from 'vue-router'<br>
  Vue.use(VueRouter)<br>
  import {routes} from './route';<br>
  
  const router = new VueRouter({ <br>
    routes, // short for `routes: routes`<br>
    mode:'hash',<br>
  })<br>
  
  <b>** Register router in app section **</b> <br>
    const app = new Vue({ <br>
      el: '#app',<br>
      router, <br>
    });
  
## On Route.js
  import addcategory from './components/category/addcategory.vue';<br>
  export const routes = [<br>
    { path: '/add/category', component: addcategory },<br>
  ]<br>
 
## add vfrom on app.js
  // V-form
import { Form, HasError, AlertError } from 'vform'<br>

Vue.component(HasError.name, HasError)<br>
Vue.component(AlertError.name, AlertError)<br>
window.Form = Form;<br>
  
