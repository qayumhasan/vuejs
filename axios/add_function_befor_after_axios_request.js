axios.interceptors.request.use(function (config) {
    
    NProgress.start();
    
    return config;
  }, function (error) {
      console.log(error)
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    NProgress.done();
    
    
    return response;
  }, function (error) {
    console.log(error)
    return Promise.reject(error);
  });
