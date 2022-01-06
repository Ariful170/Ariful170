//Javascript Array-Nested array use

var car=["Totota Corolla","350000",[
"red wine","Black",[
    "Silver1","silver2","silver3"
]
],
  ["Japan","Bangladesh","India"]
];

console.log(car); //Hole information show in console
console.log(car[2]); //only array no 2 show (setting26.js:12 (3) ["red wine", "Black", Array(3)])
console.log(car[2][2][1]); //will be show silver2 Bcz 2 no array -2 no array - 1 no color.
