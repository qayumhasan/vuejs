#Vue js
## Globul axios base url set on app.js:
  window.axios.defaults.baseURL ='https://lara-vue-6488e.firebaseio.com'
  window.axios.defaults.headers.common['Authorization'] ='Qayum hasan'
  window.axios.defaults.headers.get['Accepts'] ='application/json'
  
## Add Vue Router on app.js
  import VueRouter from 'vue-router'<br>
  Vue.use(VueRouter)<br>
  import {routes} from './route';<br>
