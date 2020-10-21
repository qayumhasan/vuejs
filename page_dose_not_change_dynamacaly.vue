<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    this.getProject();
  },
  watch: {
    $route(to, from) {
      this.getProject();
    },
  },
  methods: {
    getProject() {
      let id = this.$route.params.id;

      axios.get("/projectsdetails/" + id).then((response) => {
        this.projects = response.data.data;
        console.log(response);
      });
    },
  },
};
</script>
