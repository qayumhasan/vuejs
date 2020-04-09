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
 
 <b>********* When show data using vuex  **********<b>
 
  
<script>
    export default { <br>

        name:'List', <br>
        <b>** mounted method like as __contractor. In here mounted method send a request to vuex for data.**</b>
        mounted(){ <br>
            return this.$store.dispatch("allcategory") <br>
        }, <br>
        <b>** After mounted method sending request for data now it store on getallcategory method **</b>
        computed:{ <br>
            getallcategory(){ <br>
            

              return this.$store.getters.getCategory <br>
            } <br>
        }, <br>
        methods:{ <br>
            deleteCategory(id){ <br>
                axios.get('/blog/category/' +id) <br>
                    .then(()=>{ <br>
                        this.$store.dispatch("allcategory") <br>
                    }) <br>
            } <br>
        }, <br>
     
    
    } <br>
</script>  <br>
 
 

