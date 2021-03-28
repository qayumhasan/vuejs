<script>
import subcat from './shop_subcategory';
export default {
  name: "shopPage",
  data() {
    return {
      shopProduct: {},
    };
  },

  components:{
    subcat:subcat
  },
  mounted() {
    this.getshopproduct();
  },
  
  methods: {
    getshopproduct(page = 1) {
      var id = this.$route.params.id;
      axios.get("/shop/product/" + id + "?page=" + page).then((res) => {
        this.shopProduct = res.data;
      });
    },
    addtocart(product) {
      return this.$store.dispatch("addtocart", {
        product: product,
        qty: 1,
      });
    },
  },
};
</script>
