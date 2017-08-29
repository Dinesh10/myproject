
app.controller('JsonController', [ '$scope', function($scope) {
	$scope.onSubmit = function() {
		alert($scope.user);
		alert(angular.isObject($scope.user));
		angular.forEach($scope.user, function(value){
			console.log(value);
		});
		console.log(JSON.stringfy($scope.user));
	}
} ]);