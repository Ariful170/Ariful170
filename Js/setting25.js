//nested Function used
function myName(name){
  return "My Name is:"+name;
}

//this is nested function
function nameAndage(someone){
  return someone;
}

function fullNameAge(age,someone){
return myName("Frelancer") + nameAndage (someone)+ "& age is :" + age;
}

console.log(fullNameAge(40, "Arif"));
