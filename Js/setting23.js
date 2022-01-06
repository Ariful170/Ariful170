//in object take sub varrible that's call proparty and
//between object if use function used thats call method.

var car={};
car.name="Toyota corolla";
car.price="4500000";
car.tax="30";
car.color="Red Wine";
car.wheelSize="14";

console.log(car);
//update a property
car.name="Mirubashi"; //Proparty name change this way-case sensative

delete car.name;
console.log(car);
car.objMethod = function(){

  return "I am a boy";
}

console.log(car.objMethod);
//console.log(car.name +" "+ car.price);

  //var car={                       //curly breaket
  //  name : "Toyota corolla", // sub variable
  //  price : 4500000,
  //  tax : 20,
  //  Carcolor : "Rerd wine",
//    Wheelsize : "14",
//  }

//console.log(car);


//document.querySelector("#Name").innerHTML = car.name;
//document.querySelector("#Color").innerHTML = car.Carcolor;
//document.querySelector("#Size").innerHTML = car.Wheelsize;
//document.querySelector("#Tax").innerHTML = car.tax;
//document.querySelector("#method").innerHTML = car.adbanner(10);
