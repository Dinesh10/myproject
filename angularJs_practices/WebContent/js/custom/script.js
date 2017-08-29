var app = angular.module("myApp");
app.filter('idFilter',function(){
   return function(input,optional, opt2){
       var out = optional + " " + input + " " + opt2;
       return out;
   }
});