
<template>
<tr v-for="(category,index) in getallcategory" :key="category.id">
      <th scope="row">{{index+1}}</th>
      <td>{{category.cat_name}}</td>
      <td>
        <a href="" @click.prevent="deleteCategory(category.id)" >Delete</a>
        
        <router-link :to="`/editcategory/${category.id}`">Edit</router-link>
      </td>
    </tr>
</template>

<script>
    export default {
        name:'List',
        ** sending a request on vuex for data**
        mounted(){
            return this.$store.dispatch("allcategory")
        },
        
        computed:{
          ** get all data **
            getallcategory(){
            

              return this.$store.getters.getCategory
            }
        },
        methods:{
            deleteCategory(id){
                axios.get('/blog/category/' +id)
                    .then(()=>{
                        this.$store.dispatch("allcategory")
                    })
            }
        },
     
    
    }
</script>
