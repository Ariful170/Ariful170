var extra =10;
function taxcall(price,newtax,person){
  var productprice=price;
  var tax = newtax;
  var totalprice=productprice/100*newtax +productprice;
  return totalprice + extra + " by" + person;
}
document.querySelector("#Mobile").innerHTML = taxcall(15000, 10," polas" )
document.querySelector("#Bikas").innerHTML = taxcall(1000, 2," Bilas" )
document.querySelector("#laptop").innerHTML = taxcall(53000, 12," sohug" )
