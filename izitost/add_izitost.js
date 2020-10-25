## download izitost from https://izitoast.marcelodolza.com/
## in your main .js file
  import iziToast from 'izitoast';
  Vue.prototype.$iziToast = iziToast;
## in your template
  this.$iziToast.success({
                    position:'topRight',
                    message: 'Product Add to cart successfully!'
                });
## add css on blade file
