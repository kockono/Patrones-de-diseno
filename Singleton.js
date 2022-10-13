/**
 * Solo permite crear una sola instancia de la clase
 * 
 * Utilidades: Sirve para una conexion con la base de datos, cuando toma tiempo en conectar no deberían intentar
 * crear otra instancea
 */

class Logs {
    constructor(data){
        if (!logsInstance) {
            logsInstance = this;

            this._data = data;
        } else {
            return logsInstance;
        }
    }

    get data(){
        return this._data;
    }
}

console.log( new Logs("Hello").data );
console.log( new Logs("Hello2").data );
console.log( new Logs("Hello3").data );
console.log( new Logs("Intento4").data );


