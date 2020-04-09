 # vuex.js
 
 ## In app.js
 
import Vuex from 'vuex'<br>
Vue.use(Vuex) <br>
import storeData from "./store/index" <br>
const store = new Vuex.Store( <br>
    storeData <br>
) <br>
  
 <b>** Register it on app section **</b>
  const app = new Vue({ <br>
   el: '#app', <br>
    router, <br>
    store, <br>
  });<br>

<b>********* write store/index.js file like as vuex.js file  **********<b>

