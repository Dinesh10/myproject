app.controller('ProjectController',['$scope',function($scope){
	
	$scope.products = [
		{
			"product_id" : 1,
			"product_name" : "Samsung AB",
			"product_description" : "the sumsung modile is very good",
			"product_image" : "images/mobile.jpeg",
			"product_price" : 2550
		},
		{
			"product_id" : 2,
			"product_name" : "Iphone AB",
			"product_description" : "the iphone modile is very good",
			"product_image" : "images/mobile.jpeg",
			"product_price" : 25500
		},
		{
			"product_id" : 3,
			"product_name" : "Moto AB",
			"product_description" : "the moto modile is very good",
			"product_image" : "images/mobile.jpeg",
			"product_price" : 25500
		}
	];
$scope.cart = [];
$scope.addToCart = function(productIndex){
//	alert(productIndex);
 $scope.cart.push($scope.products[productIndex]);
 $scope.products[productIndex].disable = true;
};
//$scope.removeItem = function(in)

$scope.removeItem = function(itemIndex){
	$scope.cart[itemIndex].disable = false;
	$scope.cart.splice(itemIndex,1);
};


$scope.getTotal = function(){
	var total = 0;
	angular.forEach($scope.cart,function(value){
		total = total + value.product_price;
	});
return total;
}






		

}]);