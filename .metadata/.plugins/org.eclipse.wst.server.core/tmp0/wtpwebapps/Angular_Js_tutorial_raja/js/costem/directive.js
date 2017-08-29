
app.directive('firstDirective',function(){
	return{
		restrict : "EA",
		template : function(element,atribute){
			return "<img src='images/small.png'/>"; 
		}
	}
});

app.directive('secrondDirective',function(){
	return{
		restrict : "EA",
		template : "hello angular 2"
	}
});