app.controller('IndexController',['$scope',function($scope){

	
		$scope.message = "Hello Angular";

    
	$scope.postData = function(){
      alert($scope.username);
     }

   $scope.languages = [
	   {
		   "name" : "javascript",
		   "version" : 5.7,
	   },
	   {
		   "name" : "PHP",
		   "version" : 11.1,
			   
	   },
	   {
		   "name" : "HTML",
		   "version" : 5.0
	   }
   ];


}]);