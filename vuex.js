export default{
	state:{
		category:[],
	},
	getters:{
		

		 getCategory: (state, getters) => {
   			 return state.category
  }
	},
	

	actions:{
		allcategory(context){
			axios.get('/blog/category')
				.then((res)=>{
					context.commit('category',res.data.category)
				})
		},
	},
	mutations:{
		category(state ,data){
			return state.category =data
		}
	},





}
