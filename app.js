import { name } from "./js/ex1.js";
import { printTerminal, suma } from "./js/ex2.js";

let num1=3;
let num2=5;

function app(){
   
printTerminal(name);
printTerminal(suma(num1,num2));


}

app();

function sumar(param,param2){
    console.log(param+param2);
return param+param2;
}





