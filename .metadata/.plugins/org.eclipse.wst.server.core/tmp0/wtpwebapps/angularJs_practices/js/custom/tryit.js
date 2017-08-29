//var app = angular.module("tryit",[]);
//app.controller("employerlist", function($scope){ 
//$scope.id="23";
//$scope.list=[
//	1,2,3,4
//];
//});

var app = angular.module("select", []);
app.controller("numbers", function($scope) {
	$scope.listnumber = [ 100, 200, 300 ];

	$scope.empList = [ {
		empId : "1001",
		empName : "Sathiesh",
		Salary : "25000"	
	}, {
		empId : "1002",
		empName : "Raja",
		Salary : "48000"
	}, {
		empId : "1003",
		empName : "Arun",
		Salary : "22000"
	}, {
		empId : "1004",
		empName : "Aravinth",
		Salary : "15000"
	}, {
		empId : "1005",
		empName : "Bala",
		Salary : "225000"
	} ];

});