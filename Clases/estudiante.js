export default class Estudiante extends Persona {
    constructor(nombre, edad, matricula) {
        super();
        this.carrera = "";
    }

    estudiar(){
        return `${this.nombre} está estudiando ${this.carrera}`;
    }

    #calcularPromedio() {
        return 65;
    }

    verPromedio() {
        return `Promedio: ${this.#calcularPromedio()}`;
    }

}