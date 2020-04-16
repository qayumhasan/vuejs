<template>
   <div class="col-lg-12 stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-10">
                      <h4 class="card-title">Category List</h4>
                    </div>
                    <div class="col-lg-2">
                      
                      <router-link to="/category/add" class="btn btn-success pull-right">Add Category</router-link>
                    </div>
                  </div>
                 
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            SL
                          </th>
                          <th>
                            Category
                          </th>
                        
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                       <tr v-for="(category,index) in getallcategory" :key="category.id">
                          <td>
                            {{index +1}}
                          </td>
                          <td>
                            {{category.cat_name}}
                          </td>
                          
                          <td>
                            <router-link :to="`/category/edit/${category.id}`">Edit</router-link>
                             || 
                            <a href="" @click.prevent="deleteCategory(category.id)" >Delete</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
    export default {
      name:'List',
        mounted(){
            return this.$store.dispatch("allcategory")
        },
          computed:{
          
            getallcategory(){

              return this.$store.getters.getCategory
            }
        },
        methods:{
          deleteCategory(id){
          
          // if this can not work use like this //
          
            const vm = this;

            vm.$toast.question('Are you sure about that?','confirm',{
    timeout: 20000,
    close: false,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: 'Hey',
    message: 'Are you sure about that?',
    position: 'center',
    buttons: [
        ['<button><b>YES</b></button>', function (instance, toast) {
           axios.get('/category/delete/' +id)
                    .then(()=>{
                        vm.$store.dispatch("allcategory")
                    })
 
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
 
        }, true],
        ['<button>NO</button>', function (instance, toast) {
 
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
 
        }],
    ],
   
});
            
             
          }
        }
    }
</script>
