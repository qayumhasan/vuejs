// using filter
Vue.filter('sortlength',function (text,length,suffix) {
    return text.substring(0,length)+suffix;
})

// use in template

{{aboutus.details |striphtml |sortlength(590,'...')}}
