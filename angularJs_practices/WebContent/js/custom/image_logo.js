
app.directive('channelLogo',function(){
	return{
		restrict : "EA",
        template : function(element,atribute){
        	alert(atribute.size);
        	return "<img src='images/3.jpg'>";
        }
	}
});
app.directive('elementAtribute',function(){
	return{
		restrict : "EA",
		template
	}
});