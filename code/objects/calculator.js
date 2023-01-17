export default class Calculator {
    addition(x, y) {
        console.log(x + " + " + y + " = " + (x+y));
    }
    subtraction(x, y) {
        console.log(x + " - " + y + " = " + (x-y));
    }
    multiplication(x, y) {
        console.log(x + " * " + y + " = " + x*y);
    }
    division(x, y) {
        console.log(x + " / " + y + " = " + x/y);
    }
    square(x) {
        console.log(x + "^2 = " + x*x);
    }
    squareRoot(x) {
        console.log("sqr root of " + x + " = " + Math.sqrt(x));
    }
} 