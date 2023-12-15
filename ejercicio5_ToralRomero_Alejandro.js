
let cadenaSolicitada;

do {
    cadenaSolicitada = prompt('Ingrese una cadena para ser cifrada');

} while (cadenaSolicitada == "");


/**
 * Cifra una cadena
 *
 * @param {*} cadena Cadena de texto
 * @return {*} 
 */
function cifrarCadena(cadena) {
    let arrayCodificar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s','t','u','v','w','x','y','z'];

    

    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * ((arrayCodificar.length - 0) + 0));
        resultado += arrayCodificar[numeroAleatorio];

    }

    return `Cadena Original: ${cadena} | Cadena Cifrada: ${resultado}`;
}


console.log(cifrarCadena(cadenaSolicitada));
