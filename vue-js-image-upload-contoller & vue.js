
*******************In controller******************************

class PostController extends Controller
{
    public function store(Request $request)
    {
    	
    	$strpos = strpos($request->photo,';');
        $sub = substr($request->photo,0,$strpos);
        $ex = explode('/',$sub)[1];
        $name = time().".".$ex;

        $img = Image::make($request->photo)->resize(200, 200);
        $upload_path = public_path()."/uploadimage/";
        $img->save($upload_path.$name);
        $post = new Post();
        $post->title = $request->title;
        $post->details = $request->details;
        $post->category_id = $request->cat_id;
        $post->user_id = 1;
        $post->photo = $name;
        $post->save();
    	return response(null,Response::HTTP_CREATED);
    }
    
    *************************** In vuejs************************************
    
    <script>
import { required } from 'vuelidate/lib/validators';
    export default {
      data(){
        return{
          title:'',
          details:'',
          photo:'',
          cat_id:'',
        }
      },
        mounted() {
             return this.$store.dispatch("allcategory")
        },
        
        computed:{
          getallcategory(){

              return this.$store.getters.getCategory
            }
        },
        methods:{
          changePhoto(event){

                let file = event.target.files[0];
                 if(file.size>1048576){
                     swal({
                         type: 'error',
                         title: 'Oops...',
                         text: 'Something went wrong!',
                         footer: '<a href>Why do I have this issue?</a>'
                     })
                 }else{
                     let reader = new FileReader();
                     reader.onload = event => {
                         this.photo = event.target.result
                         console.log(event.target.result)
                     };
                     reader.readAsDataURL(file);
                 }
             
            
          },
          addnewPost(){
              const postData = {
                title: this.title,
                details: this.details,
                photo: this.photo,
                cat_id: this.cat_id,
              }
                 axios.post('/post/store', postData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
          }
        }
    }
</script>
