import Calculator from "./calculator.js";
import Car from "./car.js";
import MorseCodeGenerator from "./morse.js";

let car = new Car("BMW", "petrol", "250 km/h");
car.getBrand();
car.getFuel();
car.getTopSpeed();

let calculator = new Calculator();
calculator.addition(2, 4);
calculator.subtraction(34, 6);
calculator.multiplication(5, 7);
calculator.division(10, 2);
calculator.square(4);
calculator.squareRoot(9);

let morse = new MorseCodeGenerator();
morse.encodeTextToMorse("This is my fancy text");
morse.decodeTextFromMorse("- .... .. ... .. ... -- -.-- ..-. .- -. -.-. -.-- - . -..- -");