//between array set one employee object
var employee = [];

employee[0] = {
name:"Nasim",
age:"30",
designation:"Web Developer",
knowEnglish:"Java,php,web",
isActive:true
};
employee[1] = {
name:"Safik",
age:"33",
designation:"Web Developer",
knowEnglish:"Java,php,web",
isActive:true
};
employee[2] = {
name:"Manus",
age:"37",
designation:"Web Developer & PHP",
knowEnglish:"Java,php,web",
isActive:true
};
//array wise output
//console.log(employee[0].name);
//console.log(employee[0].age);
//if total want to see by loop then below of system loop system
//50 times name show in body
//var i=0;
//while(i < 50){
  //document.write(i+ ".Nasim <br/>");
  //++i;
//}
var arraylength=employee.length;
var i=0;
while(i<3){
  console.log(
    " Name: " + employee[i].name +
    ", Age: " + employee[i].age +
    ", Designation: " + employee[i].designation +
    ", knowEnglish:" + employee[i].knowEnglish
  );
  ++i;
}
//console.table(employee[i]);
