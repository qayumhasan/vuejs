
<template>
<form @submit.prevent="updateCategory">  
    <input type="text" v-model="form.cat_name" name="cat_name">
    <button type="submit" class="btn btn-primary">Update</button>
</form>
</template>

<script>

export default{

	name:"edit",

	mounted(){
  
		axios.get(`/blog/editcategory/${this.$route.params.id}`)
			.then((res)=>{
				this.form.fill(res.data.category)
			})

	},
	data(){
		return {
			form:new Form({
				cat_name:''
			})
		}
	},
	 methods:{
    	updateCategory(){
    		 this.form.post(`/blog/update_category/${this.$route.params.id}`)
        	.then(({ data }) => { 
        	console.log(data) 
        	this.$router.push('/allcategory');
        	})
    		
    	}
    },

}
 
</script>
