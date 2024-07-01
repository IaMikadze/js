let a = "mariam";
if (a === "mariam") {
  console.log(true);
} else {
  console.log(false);
}
//3
switch (a) {
  case "mariam":
    console.log("true");
    break;
  default:
    console.log("false");
}
//4
let b = 5;
while (b <= 100) {
  console.log(b);
  b++;
}
//5
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}
//6
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};
if (user2.age < 18 && user2.studentstatus === "active") {
  console.log("hello user");
} else if (user2.name === "levani") {
  console.log("hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}
//7
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 == 0) {
    console.log(array6[i]);
  }
}
//8
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status === true) {
    console.log(users[i]);
  }
}
