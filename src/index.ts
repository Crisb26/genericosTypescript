class ContenedorGenerico<T> {
    private elementos: T[];

    constructor() {
        this.elementos = [];
    }

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    obtener(indice: number): T {
        return this.elementos[indice];
    }

    mostrarTodos(): void {
        console.log(this.elementos);
    }
}

const contenedorNumeros = new ContenedorGenerico<number>();
contenedorNumeros.agregar(1);
contenedorNumeros.agregar(2);
contenedorNumeros.agregar(3);

console.log("Contenedor de números:");
contenedorNumeros.mostrarTodos();

const contenedorTextos = new ContenedorGenerico<string>();
contenedorTextos.agregar("Hola");
contenedorTextos.agregar("Mundo");

console.log("Contenedor de textos:");
contenedorTextos.mostrarTodos();