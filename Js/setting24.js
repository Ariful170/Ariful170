//Nested function in javascript
//normal funtion 1-----------------
function jagkoro(){
var a=10;
var b=10;
var sum = a+b;
return sum;
}
document.querySelector("#showKoro").innerHTML=jagkoro();

//normal function 2-----------------
function jagkoro1(){
var c=20;
var d=10;
console.log(c+d);
}
jagkoro1();

//parameter function---------------
function biogkoro(fnumber,lnumber){
  var e = fnumber;
  var f = lnumber;
  return e-f;
}
console.log(biogkoro(30,5));
//function expretion
var jogkoro = function(fnumber, lnumber){
var a=fnumber;
var b=lnumber;
  console.log(a+b);
}
jogkoro(20,30);
