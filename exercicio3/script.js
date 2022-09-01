const arrayNumber = [1, 50, 99, -32, 77];
const arrayString = ["Lucas", "Iris", "Patricia"];
const arrayMista = ["Tudo passa!", 77, true];

let arrayNumberCopia = arrayNumber.slice();
let arrayStringCopia = arrayString.slice();
let arrayMistaCopia = arrayMista.slice();

arrayNumberCopia.push(157);      //Exercício 3.A
console.log(arrayNumber);
console.log(arrayNumberCopia);

arrayStringCopia.pop(); //Exercício 3.B
console.log(arrayString);
console.log(arrayStringCopia);

arrayMistaCopia.splice(1, 1); //Exercício 3.C
console.log(arrayMista);
console.log(arrayMistaCopia); 

