//While Loop
var x =0;
while (x<=10){

console.log(x);
++x;
}
//for Loop
for(x=0;x<10; ++x){
  console.log(x +" Nasim")
}

//do while Loop
var x =9;
do
{
console.log(x + "Rasel");
++x;
}while (x<8);

//Vdo 34 no
var names =["Namsim","rudro","kabir","kabid"];
var namelength = names.length;
var counter =0;
while(counter<names.length){
console.log(names[counter]);
counter++;
}
//or for of use same output from before code
//for of used will be array
//for in used will be object
var names =["Namsim","rudro","kabir","kabid"];
for(let name of names){
   if(name==="rudro"){
     console.log(name + "is suspended");
}
//  console.log(name);
}
//for in used by object
//object make
var names ={
fName: "freelancer",
lName: "Nasim",
age: 20,
addr:"Dinazpur",
maritialstatus:"single :p"
};
for(name in names){
  console.log(names[name]);
}

//Another way gramexcent ``
var names ={
fName: "freelancer",
lName: "Nasim",
age: 20,
addr:"Dinazpur",
maritialstatus:"single :p"
};
for(name in names){
//string and code with togather write
  console.log(`name: ${name} & Value: ${names[name]}`);
}

//Vdo 35 no forEach loop system
var names =["Namsim","rudro","kabir","kabid"];
//foreach parameter value=must index=optional array=optional
names.forEach(function(values,indexes){
//names.forEach(function(values,indexes,array){
  console.log(indexes+"=>" + values);
  //console.log(array);
});
