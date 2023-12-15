
let numFilas = "";

do {
    numFilas = prompt('Ingrese el numero de lineas para crear el triangulo');
} while (isNaN(parseInt(numFilas)));




/**
 * Crea un triangulo
 *
 * @param {*} numeroFilas Numero de filas del triangulo
 */
function crearTriangulo(numeroFilas) {
    for (let i = 1; i <= numeroFilas; i++) {
        console.log((' ').repeat(numeroFilas - i) + ('*').repeat((i * 2) - 1));

    }
}

