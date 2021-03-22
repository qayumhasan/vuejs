
## In Product.vue Page

addtocart(product){
    return this.$store.dispatch('addtocart',{
       product:product,
       qty:1
    });
 }
 
 
 
## In store.js at action section

addtocart({ commit }, { product, qty }) {
			commit('ADD_TO_CART', { product, qty })

		},

## In store.js at mutations section

	ADD_TO_CART(state, { product, qty }) {
			state.carts.push({
				product,
				qty
			})
      

## In store.js at state section
state: {
		
		carts: [],
		
	},
  
  ## In cart.vue section
  
  computed:{
         carts(){
            return this.$store.state.carts;
         },
      }
 
