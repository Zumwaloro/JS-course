//console log
console.log("Hello world!");

//variables
let integer = 15;
let float = 20.6;
let text = "text";
let truth = true;

//constants
const value = "This does not change.";

//concatenation
let firstPart = "This text ";
let secondPart = "is one string now.";
let fullText = firstPart + secondPart;
let redundant = "This is" + " redundant.";

//mathematical operations:
let addition = 5 + 3;
let substraction = 5 - 2;
let multiplication = 5 * 15;
let division =  10 / 5;
let modulo = 20 % 7;

//arrays
let list = [1, 5, 15, 65, 873];
let second = list[1];
let lengthOfArray = list.length;
list.push(999);
let popRemove = list.pop();
list[0] = 15000;
list.reverse();
list.sort();
let unshiftRemove = list.unshift();

//logical operators
let andOperation1 = true && true;
let andOperation2 = false && true;
let orOperation1 = true || false;
let orOperation2 = false || false;
let notOperation1 = !true;
let notOperation2 = !false;
let equality1 = "text" === "text";
let equality2 = "not" === "the same";
let equality3 = "not" !== "the same";
let equality4 = !("text" === "text");
let terniaryOperator = 4+5 === 9 ? "Nine." : "I like cats.";

//conditionals
if (equality1) {
    console.log("This was true.");
} else if(equality2) {
    console.log("The second was true");
} else {
    console.log("This was not true");
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are 30 NOK a kilo.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are 50 NOK a kilo.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

//loops
for(let i = 0; i < 5; i++) {
    console.log("for-loop i = " + i);
}

let i = 0;
while (i < 5) {
    console.log("while-loop i = " + i);
    i++;
}

let j = 0;
do {
    console.log("do/while-loop j = " + j);
    j++
} while (j < 5);

//functions and arguments
function addTwoNumberTogether(a, b) {
    console.log("a + b = " + (a + b));
}
console.log("No output without return statement: " + addTwoNumberTogether(3, 8));

//return values
function divideTwoNumbers(a, b) {
    return a / b;
}
console.log("a / b = " + divideTwoNumbers(3, 8));

//arrow functions
let arrowMultiplication = (a, b) => {
    return a * b;
}
console.log("a * b = " + arrowMultiplication(3, 8));

let arrowSubstraction = (a, b) => a - b; 
console.log("a - b = " + arrowSubstraction(3, 8));

//functions as arguments for high order functions
function highOrderFunction (x, myFunctionAsParameter) {
	myFunctionAsParameter(x);
}

highOrderFunction(5, (x)=> {
	console.log("This is my inner function: " + x);
})

//classes
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}

//objects
const rectangle = new Rectangle(4, 5);
console.log("Area = " + rectangle.area());
const alsoAnObject = {
    name: "Attila",
    nationality: "Hungarian",
    language: "Hungarian",
    age: 18,
    isASoftwareTester: true
}
console.log("Type of this: " + typeof alsoAnObject);

//inheritance
class Product {
	constructor(brand) {
  	this.brand = brand;
  }
  displayBrand() {
  	console.log("Brand: " + this.brand);
  }
}

class Shoe extends Product {
	constructor(brand, size) {
  	super(brand);
    this.size = size;
  }
  displaySize() {
  	console.log("Size: " + this.size);
  }
}

class RunningShoe extends Shoe {
	constructor(brand, size) {
  	super(brand, size);
  }
  displayType() {
  	console.log("Type: running shoes");
  }
}

let shoe = new RunningShoe("Nike", "42");
shoe.displayBrand();
shoe.displaySize();
shoe.displayType();