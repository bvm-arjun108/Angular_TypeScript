"use strict";
// String Datatype
let lname;
lname = "Santosh";
let names = lname.toUpperCase();
console.log(names);
//Number Datatype
let age;
let dob = "25";
let result = parseInt(dob);
age = 10;
console.log(age, result);
// Boolean Datatype
let logic = false;
console.log(logic);
//Array Datatype
let empList;
empList = ["Arjun", "Arjun1", "Arjun2", "Arjun3", "Arjun4", "Arjun5", "Arjun7"];
let depList;
depList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let results = depList.filter((num) => num > 2);
let res = empList.find((dep) => dep == "Arjun");
let sum = depList.reduce((sum, dep) => sum + dep);
console.log(results);
console.log(res);
console.log(sum);
let c = 2 /* Color.Blue */;
console.log(c);
//Tuples DataTypes
let swapnumbs;
function swapnumbers(num1, num2) {
    return [num2, num1];
}
swapnumbs = swapnumbers(10, 20);
//Any Datatype
let department;
department = "IT";
department = 10;
// Void Datatype
