<script>
import { required } from 'vuelidate/lib/validators';
    export default {
      data(){
        return{
          cat_name:'',
        }
      },
        mounted() {
            
        },
        validations:{
          cat_name:{
            required,
          }
        },
        methods:{

          addCategory(){
            const category ={
              cat_name:this.cat_name,
            }
            
              axios.post('/category/store', category)
                .then((response)=> {
                  this.$toast.success('Successfully inserted record!', 'OK',{position:'topRight'});
                  this.$router.push('/category')
                })
                .catch((error)=> {
                  console.log(error);
                });
      

          }
        }
    }
</script>
