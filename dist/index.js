"use strict";
var ContenedorGenerico = /** @class */ (function () {
    function ContenedorGenerico() {
        this.elementos = [];
    }
    ContenedorGenerico.prototype.agregar = function (elemento) {
        this.elementos.push(elemento);
    };
    ContenedorGenerico.prototype.obtener = function (indice) {
        return this.elementos[indice];
    };
    ContenedorGenerico.prototype.mostrarTodos = function () {
        console.log(this.elementos);
    };
    return ContenedorGenerico;
}());
// Ejemplo de uso
var contenedorNumeros = new ContenedorGenerico();
contenedorNumeros.agregar(1);
contenedorNumeros.agregar(2);
contenedorNumeros.agregar(3);
console.log("Contenedor de números:");
contenedorNumeros.mostrarTodos();
var contenedorTextos = new ContenedorGenerico();
contenedorTextos.agregar("Hola");
contenedorTextos.agregar("Mundo");
console.log("Contenedor de textos:");
contenedorTextos.mostrarTodos();
