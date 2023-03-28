// String Datatype
let lname : string;
lname = "Santosh";
let names = lname.toUpperCase();
console.log(names);

//Number Datatype
let age :  number;
let dob = "25";
let result = parseInt(dob);
age = 10;
console.log(age, result);

// Boolean Datatype
let logic : boolean = false;
console.log(logic);

//Array Datatype
let empList : string[];
empList = ["Arjun","Arjun1","Arjun2","Arjun3","Arjun4","Arjun5","Arjun7"];
let depList : Array<number>;
depList = [1,2,3,4,5,6,7,8,9];

let results = depList.filter((num) => num > 2);
let res = empList.find((dep) => dep == "Arjun");
let sum = depList.reduce((sum, dep) => sum + dep);
console.log(results);
console.log(res);
console.log(sum);

// enum DataType
const enum Color{
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
console.log(c);

//Tuples DataTypes
let swapnumbs: [number,number];
function swapnumbers(num1:number, num2:number) : [number, number] {
    return [num2, num1];
}
swapnumbs = swapnumbers(10,20);

//Any Datatype
let department: any;
department = "IT";
department = 10;

// Void Datatype