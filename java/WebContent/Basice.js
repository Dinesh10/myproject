/**
 * 
 */
function calme()
{
	var a,b,c;
	a=Number(document.getElementById("a").value);
	b=Number(document.getElementById("b").value);
	c=a+b;
	document.getElementById("x").innerHTML="TOTAL :"+c; 
    }

function clr()
{
	document.getElementById("x").innerHTML="";
	document.getElementById("a").value="";
	document.getElementById("b").value="";
	}