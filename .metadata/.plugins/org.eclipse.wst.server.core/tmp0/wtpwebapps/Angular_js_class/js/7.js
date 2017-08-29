var myapp = angular.module("myApp");
myapp.filter("ilangoFilter", function() {
	return function(input, option) {
		if (input != undefined) {
			return input + option;
		}
	}
});

/*myapp.factory('employeeFactory', function(){
	var employeefactoryObject = {};
	employeefactoryObject.contacts = [
			{
				empName:'ilango', 
				empID:'203', 
				Salary:'10000'
			},
			{
				empName:'srini',
				empID:'204', 
				Salary:'10000'
			},
			{
				empName:'deepak', 
				empID:'205', 
				Salary:'10000'
			},
			{
				empName: 'rio', 
				empID:'206', 
				Salary: '20022'
			}
			];
	return employeefactoryObject;
});*/

myapp.service('employeeFactory', function(){
	this.contacts = [
			{
				empName:'ilango', 
				empID:'203', 
				Salary:'10000'
			},
			{
				empName:'srini',
				empID:'204', 
				Salary:'10000'
			},
			{
				empName:'deepak', 
				empID:'205', 
				Salary:'10000'
			},
			{
				empName: 'rio', 
				empID:'206', 
				Salary: '20023'
			}
			];
});