## In main.js/app.js
  Vue.prototype.$eventBus = new Vue();
## AUTH.VUE
this.$eventBus.$emit('checkuser', 'yes')
## HEADER TOP
this.$eventBus.$on('checkuser', (payload) => {
                    this.isLogged = payload
                    }) 
