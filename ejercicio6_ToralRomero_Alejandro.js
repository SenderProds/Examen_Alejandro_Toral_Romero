

/**
 * Clase principal trabajador
 *
 * @class Trabajador
 */
class Trabajador{
    #nombre;
    #apellidos;
    #direccion;
    #sueldo;
    


    /**
     * Creates an instance of Trabajador.
     * @param {*} nombre Nombre del trabajador
     * @param {*} apellidos Apellidos del trabajador
     * @param {*} direccion Direccion del trabajador
     * @param {*} sueldo Sueldo del trabajador
     * @memberof Trabajador
     */
    constructor(nombre, apellidos, direccion, sueldo){
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#direccion= direccion;
        this.#sueldo = sueldo;
        
    }

    ///GETTERS


    /**
     *  Devuelve el nombre del trabajador
     *
     * @return {string} Nombre del trabajador
     * @memberof Trabajador
     */
    getNombre(){
        return this.#nombre;
    }


    
    /**
     *  Devuelve los apellidos del trabajador
     * 
     * @return {string} Apellidos del trabajador
     * @memberof Trabajador
     */
    getApellidos(){
        return this.#apellidos;
    }


    /**
     * Devuelve la direccion del trabajador
     *
     * @return {string} Direccion del trabajador
     * @memberof Trabajador
     */
    getDireccion(){
        return this.#direccion;
    }



    /**
     * Devuelve el sueldo del trabajador
     *
     * @return {number} Sueldo
     * @memberof Trabajador
     */
    getSueldo(){
        return this.#sueldo;
    }


    ///SETTERS



    /**
     *  Setea el Nombre del trabajador
     *
     * @param {string} nombre Nombre del trabajador
     * @memberof Trabajador
     */
    setNombre(nombre){
        this.#nombre = nombre;
    }



    /**
     * Setea los apellidos del trabajador
     *
     * @param {string} apellidos Apellidos
     * @memberof Trabajador
     */
    setApellidos(apellidos){
        this.#apellidos = apellidos;
    }



    /**
     *  Setea la direccion del trabajador
     *
     * @param {string} direccion  Direccion del trabajador
     * @memberof Trabajador
     */
    setDireccion(direccion){
        this.#direccion = direccion;
    }



    /**
     * Setea el sueldo del trabajador
     *
     * @param {*} sueldo Sueldo
     * @memberof Trabajador
     */
    setSueldo(sueldo){
        this.#sueldo = sueldo;
    }
}



/**
 * Clase Informatico Hereda de trabajador
 *
 * @class Informatico
 * @extends {Trabajador}
 */
class Informatico extends Trabajador{
    #tareas;
    constructor(nombre, apellidos, direccion, sueldo, tareas){
        super(nombre, apellidos, direccion,sueldo);
        this.tareas = tareas;
    }
}




/**
 * Clase conserje hereda de trabajador
 *
 * @class Conserje
 * @extends {Trabajador}
 */
class Conserje extends Trabajador{
    #tareas;

    constructor(nombre, apellidos, direccion, sueldo, tareas) {
        super(nombre, apellidos, direccion,sueldo);
        this.tareas = tareas;
    }
}




let informatico = new Informatico('Paco', 'Garcia','Calle de ejemplo', 1600, ['Formatear PC','Instalar SO', 'Reparar Equipo']);
console.log(informatico.getNombre());
informatico.setSueldo(1800);
console.log(informatico.getSueldo());


let conserje = new Conserje('Antonio', 'Rodrigez','Calle de ejemplo', 1300, ['Limpiar pasillo','Ordenadar Almacen', 'Actualizar informes']);
console.log(conserje.getNombre());
console.log(conserje.getSueldo());
console.log(conserje.getDireccion());