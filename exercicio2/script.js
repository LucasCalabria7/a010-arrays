const arrayNumber = [1, 50, 99, -32, 77];
const arrayString = ["Lucas", "Iris", "Patricia"];
const arrayMista = ["Tudo passa!", 77, true];

console.log(arrayNumber.length);   //Exercício 2.A
console.log(arrayString.length);
console.log(arrayMista.length);

console.log(arrayNumber[0]);     //Exercício 2.B
console.log(arrayString[1]);
console.log(arrayMista[2]);

let incluiVerdadeiro = arrayNumber.includes(77);     //Exercício 2.C
console.log(incluiVerdadeiro);
let incluiFalso = arrayMista.includes("Siuuu!!");
console.log(incluiFalso); 