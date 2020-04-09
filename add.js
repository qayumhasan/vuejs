
<template>
  <form @submit.prevent="addCategory">
      <input type="text" id="cate_name" v-model="form.cat_name" name="cat_name">
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
    export default {

    data(){
    	return{
    		 form: new Form({
        	cat_name: '',
        
      })
    	}
     
    },
    methods:{
    	addCategory(){
    		 this.form.post('/add_category')
        	.then(({ data }) => { 
        	console.log(data) 
          ** After inset data it navigation to allcategory section **
        	this.$router.push('/allcategory');
        	})
    		
    	}
    },
    }
</script>
