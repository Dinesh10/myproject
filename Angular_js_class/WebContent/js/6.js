var myapp = angular.module("myApp");
myapp.filter("ilangoFilter", function() {
	return function(input, option) {
		if (input != undefined) {
			return input + option;
		}
	}
});