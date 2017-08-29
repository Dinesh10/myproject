app.controller('ValidationController', ['$scope',function($scope){
    $scope.countries=[
    	{
    		"country_id" : 1,
    		"country_name" : "US"
    	},
    	{
    		"country_id" : 2,
    		"country_name" : "UK"
    	},
    	{
    		"country_id" : 3,
    		"country_name" : "INDIA"
    	}
    ];
	$scope.onSubmit = function() {
		console.log($scope.user);
	}
}]);














































