//Javascript Array-Nested array use

var employee = new Array(
  "Rohim",
  ["kajol","salim",
    ["Babu", "sumon","raju"],
  "yakub"
],
"rasel",
  "Jubo"
);

console.log(employee);
console.log(employee[1][2][2]); //outpur raju
console.log(employee[2]); //outpur show rasel

// another way nasted Array

var employee = new Array(
  ["Rohim",
  "salam",
  "rana",
  "sakil"
  ],
  ["toraf",
  "bikis",
  "Mahabub",
  "Kalam"
  ],
  ["Zakir",
  "jwel",
  "jony",
  "raju"
  ]
);
console.log(employee);
console.log(employee[1][2])//output show Mahabub
//
