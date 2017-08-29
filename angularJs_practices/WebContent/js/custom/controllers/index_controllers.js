app.controller('IndexController',['$scope',function($scope){
  $scope.message="Hello Angular!";

  $scope.postData = function(){
	  alert($scope.username);
  }

}]);
