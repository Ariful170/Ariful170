//in object take sub varrible that's call proparty and
//between object if use function used thats call method.
  var car={                       //curly breaket
    name : "Toyota corolla", // sub variable
    price : 4500000,
    tax : 20,
    Carcolor : "Rerd wine",
    Wheelsize : "14",
// Object method used by function
    adbanner : function(AmaderDiscount) {
      var carPrice = this.price;
      var taxc = this.tax;
      var pricewithtax = carPrice / 100 * taxc + carPrice;

      var myDiscount = AmaderDiscount;
      var reduceMoney = pricewithtax / 100 * myDiscount;
      var finalPrice = pricewithtax - reduceMoney;
      return finalPrice;  //this means inside whole property
    }
  }


document.querySelector("#Name").innerHTML = car.name;
document.querySelector("#Price").innerHTML = car.price;
document.querySelector("#Color").innerHTML = car.Carcolor;
document.querySelector("#Size").innerHTML = car.Wheelsize;
document.querySelector("#Tax").innerHTML = car.tax;
document.querySelector("#method").innerHTML = car.adbanner(10);
