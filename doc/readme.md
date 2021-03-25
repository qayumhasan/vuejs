##Show image from laravel
```
  <img class="img-fluid" :src="'public/uploads/products/thumbnail/'+product.image" alt="">
```

##Get parms values
````
this.$route.params.product_slug
````

##If NPM RUN DEV SHOW MIX ERROR
```
npm install laravel-mix@latest --save-dev
```

## Add AXIOS DEFAULT URL
  *** In master.blade.php file
```
 <meta name="api-base-url" content="{{ url('api/') }}" />
```
  *** In bootstrap.js file
 ```
    window.axios.defaults.baseURL = document.head.querySelector('meta[name="api-base-url"]').content;
 ```
