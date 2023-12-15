//A

let numeroSolicitado = "";

do{
 numeroSolicitado = prompt('Introduce un numero para crear una matriz entre 1 y el numero introducido');
}while(isNaN(parseInt(numeroSolicitado)));



console.log('Apartado A');
let arrayNumeros = [];

for (let i = 0; i < 50; i++) {
    arrayNumeros.push(Math.floor(Math.random() * (parseInt(numeroSolicitado) - 1) + 1));
    
}
console.log(arrayNumeros);



//B


console.log('Apartado B');
let numerosPares = [];
let numerosImpares = [];

arrayNumeros.forEach((numero) => {
    (numero % 2 == 0) ? numerosPares.push(numero) : numerosImpares.push(numero);
});



console.log('Numeros pares');
console.log(numerosPares);

console.log('Numeros Impares');
console.log(numerosImpares);




//C
console.log('Apartado C');

let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1);


numerosPares.forEach((numero, indice) =>{
    numerosPares[indice] = numero * numeroAleatorio;
});

numerosImpares.forEach((numero, indice) => {
    numerosImpares[indice] = numero * numeroAleatorio;
})

console.log('Numeros Pares');
console.log(numerosPares);

console.log('Numeros Impares');
console.log(numerosImpares);


//D
console.log('Apartado D');



console.log('Suma de los elementos de la matriz con numeros pares');
console.log(numerosPares.reduce((contador, numero) => (contador + numero), 0));

console.log('Suma de los elementos de la matriz con numeros impares');
console.log(numerosImpares.reduce((contador, numero) => (contador + numero), 0));






///Maximo y Minimo de la matriz de pares
let numeroMax = 0;


for (const numero of numerosPares) {
    numeroMax = Math.max(numeroMax, numero);

}

let numeroMin = numeroMax; //Se le asigna el mayor numero para que al comparar no de como resultado el 0

for (const numero of numerosPares) {
    numeroMin = Math.min(numeroMin, numero);

}


console.log(`Matriz Pares:  Max:${numeroMax} Min:${numeroMin}`);




//Maximo y minimo de la matrix de impares

let numeroMaxImpares = 0;

for (const numero of numerosImpares) {
    numeroMaxImpares = Math.max(numeroMaxImpares, numero);

}


let numeroMinImpares = numeroMaxImpares; 

for (const numero of numerosImpares) {
    numeroMinImpares = Math.min(numeroMinImpares, numero);

}
console.log(`Matriz Impares:  Max:${numeroMaxImpares} Min:${numeroMinImpares}`);