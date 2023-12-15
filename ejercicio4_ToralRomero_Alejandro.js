

/**
 * Formatea fecha
 *
 * @param {*} fecha Objeto de tipo Date
 * @return {string} Fecha formateada
 */
function formatearFecha(fecha){
    return `${fecha.getDay()}, ${fecha.getDate()} de ${fecha.getMonth()} del año de nuestro señor de ${fecha.getFullYear()}`;
}

let fecha = new Date();


console.log(formatearFecha(fecha));
