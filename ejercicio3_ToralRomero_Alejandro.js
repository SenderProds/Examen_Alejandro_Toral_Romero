

let usuario1 = {
    nombre: 'Paco',
    edad: 34,
    calle: 'Calle Paz',
    numero: 5,
    provincia: 'Granada',
    profesion: 'Informatico',
    sueldo: 1500,
    mudarse: (calle, numero, provincia) => {
        this.calle = calle; 
        this.numero = numero; 
        this.provincia = provincia;
    },

    cambiarTrabajo: (nuevoTrabajo) => {
        this.profesion = nuevoTrabajo;
    }
};



console.log('Usuario 1');
usuario1.mudarse('Calle',15,'Cadiz');
console.log(usuario1.provincia);
console.log(usuario1.profesion);

let usuario2 = {
    nombre: 'Antonio',
    edad: 45,
    calle: 'Calle Cruz',
    numero: 9,
    provincia: 'Granada',
    profesion: 'Jardinero',
    sueldo: 1200,
};

Object.setPrototypeOf(usuario2, usuario1);

console.log('Usuario 2');
console.log(usuario2.profesion);
console.log(usuario2.provincia);
usuario2.mudarse('Calle ejemplo', 12, 'Málaga');
console.log(usuario2.provincia);
