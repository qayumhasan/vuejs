## in Your vuex file
     return new Promise((resolve,reject)=>{
                axios.post('/add/to/cart',{
                    product_id:cart.producId,
                    package_id:cart.packageId,
                    extr_price:cart.extraPrice,
                })
                    .then((response)=>{
                        
                        console.log(response);
                        resolve(response);
                        
                        
                        
                    })
                    .catch((error)=>{
                        reject(error);
                    })
            })
## in your template file
        this.$store.dispatch("addtocart",{
              producId:this.products.id,
              packageId:this.package_id,
              extraPrice:this.extraprce,
          })
          .then(res=>{

              this.totalqty = ++this.totalqty;
              this.$iziToast.success({
                    position:'topRight',
                    message: 'Product Add to cart successfully!'
                });
              this.$eventBus.$emit('totalQty', this.totalqty)
            //   this.$router.push('/products/'+this.products.id);
          })
