// 1st way
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(1, 2));

// Second way with arrow function
const sub = (num1:number, num2:number):number => num1- num2;
console.log(sub(2,1));

//Third Way
const multi = function (num1:number, num2:number) : number {
    return num1 * num2;
}
console.log(multi(1, 2));

// With optional parameter (?)
function addopt(num1: number, num2: number, num3?:number): number {
    return num3? num1 + num2 + num3 : num1 + num2;
  }
  console.log(addopt(1, 2));

  // With required parameter
const subreq = (num1:number, num2:number, num3 = 10):number => num1- num2-num3;
console.log(subreq(2,1)); // Uses num3 = 10 if not passed
console.log(subreq(2,1,9)); // Uses num3 = 9 

// With REST Parameters
function addrest (num1: number, num2: number,...num3: number[]) : number{
    return num1 + num2 + num3.reduce((a,b) => a+b, 0);
}
let numbers = [1,2,3,4,5,6,7]
console.log(addrest(2,3,...numbers));
// or
console.log(addrest(2,3,4,5,6,7,8));


// generic Function. In most of the programming languagues, the generic is defined as T. In typescript, the generic can be T as well. But the recommended approach is to define it as TYPE
function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}
let concatresult = getItems<number>([1,2,3,4,5,6,7]);
let concatString = getItems<string>(["a", "b", "c", "d"]);