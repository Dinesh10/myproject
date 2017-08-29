/**
 * 
 */
function mon()
{
	var mo=new Array();
	mo[0]="JAN";
	mo[1]="FEB";
	mo[2]="MAR";
	mo[3]="APR";
	mo[4]="MAY";
	mo[5]="JUN";
	mo[6]="JUL";
	mo[7]="AUG";
	mo[8]="SEP";
	mo[9]="OCT";
	mo[10]="NOV";
	mo[11]="DEC";
b="<select>";
	for(a in mo)
	{
		b+="<option>"+mo[a]+"</option>"
	}
b+="</select>";
document.getElementById("a").innerHTML=b;
	}
	
