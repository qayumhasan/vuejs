**in app.js**

Vue.filter('striphtml', function (value) {
    var div = document.createElement("div");
    div.innerHTML = value;
    var text = div.textContent || div.innerText || "";
    return text;
  });
  
** in template **
{{aboutus.details |striphtml}}
