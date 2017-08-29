/**
 * 
 */
function swap()
{
   var a,b,c,d,e,f;
   a=10;
   b=20;
   c=30;
   d=40;
   alert("before swap :\n a: "+a+" \nb : "+b+" \nc : "+c+" \nd : "+d);
   
   f=c;
   e=d;
   d=a;
   c=b;
   b=f;
   a=e;
   
 
   alert("after swap :\n a: "+a+" \nb : "+b+" \nc : "+c+" \nd : "+d); 
}